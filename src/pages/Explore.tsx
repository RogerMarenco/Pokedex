import { useEffect, useState } from 'react'

import PokemonCard from '../components/PokemonCard'
import { getPokemons } from '../services/pokeapi'
import type { Pokemon } from '../types/pokemon'

function Explore() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function loadPokemons() {
      try {
        setLoading(true)
        setError('')

        const data = await getPokemons()

        setPokemons(data.results)
      } catch (error) {
        setError('No se pudieron cargar los Pokémon.')
      } finally {
        setLoading(false)
      }
    }

    loadPokemons()
  }, [])

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name
      .toLowerCase()
      .includes(search.toLowerCase()),
  )

  if (loading) {
    return (
      <main className="p-8 text-center">
        <p className="text-xl">🔄 Cargando Pokémon...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main className="p-8 text-center">
        <p className="text-xl text-red-600">
          ❌ {error}
        </p>
      </main>
    )
  }

  if (pokemons.length === 0) {
    return (
      <main className="p-8 text-center">
        <p className="text-xl">
          📭 No hay Pokémon disponibles.
        </p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      <section className="mb-10">

        <h1 className="text-4xl font-bold">
          Explorar Pokémon
        </h1>

        <p className="mt-3 text-lg text-gray-600">
          Descubre los primeros 50 Pokémon.
        </p>

        <div className="mt-6">
          <label
            htmlFor="pokemon-search"
            className="mb-2 block font-semibold"
          >
            Buscar Pokémon
          </label>

          <input
            id="pokemon-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Ejemplo: pikachu"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200 md:max-w-md"
            aria-label="Buscar Pokémon por nombre"
          />
        </div>

      </section>

      {filteredPokemons.length === 0 ? (
        <section
          className="rounded-2xl bg-gray-100 p-10 text-center"
          aria-live="polite"
        >
          <p className="text-xl">
            📭 No se encontraron Pokémon.
          </p>

          <p className="mt-2 text-gray-600">
            Intenta buscar con otro nombre.
          </p>
        </section>
      ) : (
        <section
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          aria-label="Lista de Pokémon"
        >
          {filteredPokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </section>
      )}

    </main>
  )
}

export default Explore