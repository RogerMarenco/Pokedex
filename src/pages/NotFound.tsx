import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-gray-100 px-6 py-16">

      <section
        className="w-full max-w-2xl rounded-3xl bg-white p-8 text-center shadow-lg md:p-12"
        aria-labelledby="not-found-title"
      >

        <div
          className="text-8xl font-extrabold text-red-600 md:text-9xl"
          aria-hidden="true"
        >
          404
        </div>

        <h1
          id="not-found-title"
          className="mt-6 text-3xl font-bold text-gray-900 md:text-4xl"
        >
          Página no encontrada
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          La página que estás buscando no existe o la
          dirección que ingresaste es incorrecta.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/"
            className="rounded-xl bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
          >
            Volver al inicio
          </Link>

          <Link
            to="/explorar"
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-bold text-gray-800 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
          >
            Explorar Pokémon
          </Link>

        </div>

      </section>

    </main>
  )
}

export default NotFound