import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-6 py-16">

        <div className="grid w-full items-center gap-12 md:grid-cols-2">

          <div>

            <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-600">
              🔴 Pokédex
            </span>

            <h1 className="mt-5 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
              Descubre todos tus Pokémon favoritos
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Explora información de Pokémon, consulta sus
              estadísticas, descubre sus tipos y guarda tus
              favoritos en un solo lugar.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/explorar"
                className="rounded-xl bg-red-600 px-6 py-3 text-center font-bold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
              >
                Explorar Pokémon
              </Link>

              <Link
                to="/favoritos"
                className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-center font-bold text-gray-800 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                Ver favoritos
              </Link>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="flex h-72 w-72 items-center justify-center rounded-full bg-red-100 shadow-inner md:h-96 md:w-96">

              <div className="text-center">

                <div className="text-8xl md:text-9xl">
                  ⚡
                </div>

                <p className="mt-4 text-2xl font-bold text-red-600">
                  ¡Atrápalos todos!
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-white px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <h2 className="text-3xl font-bold text-gray-900">
              ¿Qué puedes hacer?
            </h2>

            <p className="mt-3 text-gray-600">
              Explora las funciones principales de nuestra Pokédex.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <article className="rounded-2xl bg-gray-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="text-4xl">
                🔎
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Explorar
              </h3>

              <p className="mt-2 text-gray-600">
                Busca Pokémon y descubre información sobre
                sus tipos y características.
              </p>

            </article>

            <article className="rounded-2xl bg-gray-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="text-4xl">
                ❤️
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Favoritos
              </h3>

              <p className="mt-2 text-gray-600">
                Guarda tus Pokémon preferidos y consúltalos
                cuando quieras.
              </p>

            </article>

            <article className="rounded-2xl bg-gray-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="text-4xl">
                📊
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Estadísticas
              </h3>

              <p className="mt-2 text-gray-600">
                Consulta estadísticas, altura, peso y tipos
                de cada Pokémon.
              </p>

            </article>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Home