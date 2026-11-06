import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getPokemonById } from '../services/pokeapi'
import type { PokemonDetail } from '../types/pokemon'
import { useFavorites } from '../context/FavoritesContext'
import { useToast } from '../context/ToastContext'
import ConfirmModal from './ConfirmModal'

interface PokemonCardProps {
  url: string
}

function PokemonCard({ url }: PokemonCardProps) {
  const [pokemon, setPokemon] =
    useState<PokemonDetail | null>(null)

  const [loading, setLoading] = useState(true)

  const [showConfirmModal, setShowConfirmModal] =
    useState(false)

  const {
    addFavorite,
    removeFavorite,
    isFavorite,
  } = useFavorites()

  const { showToast } = useToast()

  const id = url.split('/').filter(Boolean).pop()

  useEffect(() => {
    async function loadPokemon() {
      try {
        if (!id) {
          return
        }

        const data = await getPokemonById(id)

        setPokemon(data)
      } catch (error) {
        console.error(
          'Error al cargar el Pokémon:',
          error,
        )
      } finally {
        setLoading(false)
      }
    }

    loadPokemon()
  }, [id])

  if (loading) {
    return (
      <article className="rounded-2xl bg-white p-6 text-center shadow-md">
        <p>🔄 Cargando...</p>
      </article>
    )
  }

  if (!pokemon) {
    return null
  }

  const pokemonId = pokemon.id
  const pokemonName = pokemon.name
  const favorite = isFavorite(pokemonId)

  function handleFavorite() {
    if (favorite) {
      setShowConfirmModal(true)
    } else {
      addFavorite(pokemonId)

      showToast(
        `${pokemonName} agregado de favoritos`,
        'success',
      )
    }
  }

  function handleConfirmRemove() {
    removeFavorite(pokemonId)

    setShowConfirmModal(false)

    showToast(
      `${pokemonName} eliminado de favoritos`,
      'info',
    )
  }

  function handleCancelRemove() {
    setShowConfirmModal(false)
  }

  return (
    <>
      <article className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

        <span className="absolute right-4 top-4 text-sm font-bold text-gray-400">
          #{String(pokemon.id).padStart(3, '0')}
        </span>

        <Link to={`/pokemon/${pokemon.id}`}>
          <div className="flex justify-center">
            <img
              src={
                pokemon.sprites.front_default ??
                'https://placehold.co/200x200?text=Pokemon'
              }
              alt={`Imagen de ${pokemon.name}`}
              className="h-40 w-40 object-contain transition duration-300 group-hover:scale-110"
            />
          </div>
        </Link>

        <h2 className="mt-3 text-center text-2xl font-bold capitalize">
          {pokemon.name}
        </h2>

        <div
          className="mt-3 flex justify-center gap-2"
          role="list"
          aria-label={`Tipos de ${pokemon.name}`}
        >
          {pokemon.types.map((type) => (
            <span
              key={type.slot}
              role="listitem"
              className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold capitalize"
            >
              {type.type.name}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">

          <Link
            to={`/pokemon/${pokemon.id}`}
            className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700"
            aria-label={`Ver detalles de ${pokemon.name}`}
          >
            Ver detalles
          </Link>

          <button
            type="button"
            onClick={handleFavorite}
            className={`rounded-full border px-3 py-2 text-xl transition ${
              favorite
                ? 'border-red-600 bg-red-600 text-white'
                : 'border-gray-300 hover:bg-red-50'
            }`}
            aria-label={
              favorite
                ? `Quitar ${pokemon.name} de favoritos`
                : `Agregar ${pokemon.name} a favoritos`
            }
          >
            {favorite ? '♥' : '♡'}
          </button>

        </div>

      </article>

      {showConfirmModal && (
        <ConfirmModal
          pokemonName={pokemonName}
          onConfirm={handleConfirmRemove}
          onCancel={handleCancelRemove}
        />
      )}
    </>
  )
}

export default PokemonCard