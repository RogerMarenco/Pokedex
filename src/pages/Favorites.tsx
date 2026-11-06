import { useFavorites } from '../context/FavoritesContext'
import PokemonCard from '../components/PokemonCard'

function Favorites() {
  const { favorites } = useFavorites()

  if (favorites.length === 0) {
    return (
      <main className="min-h-screen bg-gray-100 px-6 py-10">
        <section className="mx-auto max-w-4xl rounded-2xl bg-white p-10 text-center shadow-md">

          <div className="text-6xl">
            ♡
          </div>

          <h1 className="mt-5 text-3xl font-bold text-gray-900">
            No tienes favoritos
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Explora los Pokémon y agrega tus favoritos
            usando el corazón.
          </p>

        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">

      <section className="mx-auto max-w-7xl">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Mis favoritos
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Tienes {favorites.length}{' '}
            {favorites.length === 1
              ? 'Pokémon favorito'
              : 'Pokémon favoritos'}
            .
          </p>
        </div>

        <section
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          aria-label="Lista de Pokémon favoritos"
        >
          {favorites.map((id) => (
            <PokemonCard
              key={id}
              url={`https://pokeapi.co/api/v2/pokemon/${id}/`}
            />
          ))}
        </section>

      </section>

    </main>
  )
}

export default Favorites