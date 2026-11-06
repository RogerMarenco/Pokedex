import { NavLink } from 'react-router-dom'

function Navbar() {
  function getLinkClass({
    isActive,
  }: {
    isActive: boolean
  }) {
    return `rounded-lg px-3 py-2 font-semibold transition ${
      isActive
        ? 'bg-red-600 text-white'
        : 'text-gray-700 hover:bg-gray-100'
    }`
  }

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Navegación principal"
      >
        <NavLink
          to="/"
          end
          className="text-2xl font-bold text-red-600"
          aria-label="Ir al inicio de Pokédex"
        >
          Pokédex
        </NavLink>

        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={getLinkClass}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/explorar"
            className={getLinkClass}
          >
            Explorar
          </NavLink>

          <NavLink
            to="/favoritos"
            className={getLinkClass}
          >
            Favoritos
          </NavLink>

          <NavLink
            to="/contacto"
            className={getLinkClass}
          >
            Contacto
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar