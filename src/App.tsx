import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Explore from './pages/Explore'
import PokemonDetail from './pages/PokemonDetail'
import Favorites from './pages/Favorites'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/explorar"
          element={<Explore />}
        />

        <Route
          path="/pokemon/:id"
          element={<PokemonDetail />}
        />

        <Route
          path="/favoritos"
          element={<Favorites />}
        />

        <Route
          path="/contacto"
          element={<Contact />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

    </BrowserRouter>
  )
}

export default App