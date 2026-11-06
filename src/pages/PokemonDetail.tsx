import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { getPokemonById } from '../services/pokeapi'
import type { PokemonDetail as PokemonDetailType } from '../types/pokemon'

function PokemonDetail() {
  const { id } = useParams<{ id: string }>()

  const [pokemon, setPokemon] =
    useState<PokemonDetailType | null>(null)

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState(false)

  useEffect(() => {
    async function loadPokemon() {
      try {
        setLoading(true)
        setError(false)

        if (!id) {
          setError(true)
          return
        }

        const data = await getPokemonById(id)

        setPokemon(data)
      } catch (error) {
        console.error(
          'Error al cargar el Pokémon:',
          error,
        )

        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadPokemon()
  }, [id])

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center p-8">
        <p className="text-xl font-semibold">
          🔄 Cargando Pokémon...
        </p>
      </main>
    )
  }

  if (error || !pokemon) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold">
          ❌ Pokémon no encontrado
        </h1>

        <Link
          to="/explorar"
          className="mt-6 rounded-lg bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700"
        >
          Volver a explorar
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">

      <div className="mx-auto max-w-4xl">

        <Link
          to="/explorar"
          className="mb-6 inline-block rounded-lg bg-gray-800 px-5 py-2 font-semibold text-white transition hover:bg-gray-900"
        >
          ← Volver a explorar
        </Link>

        <section className="overflow-hidden rounded-3xl bg-white p-6 shadow-lg md:p-10">

          <div className="grid gap-8 md:grid-cols-2">

            {/* Imagen */}
            <div className="flex flex-col items-center justify-center">

              <span className="mb-3 text-lg font-bold text-gray-400">
                #{String(pokemon.id).padStart(3, '0')}
              </span>

              <img
                src={
                  pokemon.sprites.front_default ??
                  'https://placehold.co/300x300?text=Pokemon'
                }
                alt={`Imagen de ${pokemon.name}`}
                className="h-64 w-64 object-contain"
              />

            </div>

            {/* Información */}
            <div>

              <h1 className="text-4xl font-bold capitalize">
                {pokemon.name}
              </h1>

              {/* Tipos */}
              <div
                className="mt-5 flex gap-2"
                role="list"
                aria-label={`Tipos de ${pokemon.name}`}
              >
                {pokemon.types.map((type) => (
                  <span
                    key={type.slot}
                    role="listitem"
                    className="rounded-full bg-gray-100 px-4 py-2 font-semibold capitalize"
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>

              {/* Información física */}
              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-gray-100 p-4">
                  <p className="text-sm text-gray-500">
                    Altura
                  </p>

                  <p className="mt-1 text-xl font-bold">
                    {pokemon.height / 10} m
                  </p>
                </div>

                <div className="rounded-xl bg-gray-100 p-4">
                  <p className="text-sm text-gray-500">
                    Peso
                  </p>

                  <p className="mt-1 text-xl font-bold">
                    {pokemon.weight / 10} kg
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Estadísticas */}
          <div className="mt-10">

            <h2 className="text-2xl font-bold">
              Estadísticas
            </h2>

            <div className="mt-5 space-y-4">

              {pokemon.stats.map((stat) => (
                <div key={stat.stat.name}>

                  <div className="mb-1 flex justify-between">

                    <span className="font-semibold capitalize">
                      {stat.stat.name.replace('-', ' ')}
                    </span>

                    <span className="font-bold">
                      {stat.base_stat}
                    </span>

                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-gray-200">

                    <div
                      className="h-full rounded-full bg-red-600"
                      style={{
                        width: `${Math.min(
                          stat.base_stat,
                          100,
                        )}%`,
                      }}
                    />

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

      </div>

    </main>
  )
}

export default PokemonDetail