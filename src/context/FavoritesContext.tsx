import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

interface FavoritesContextType {
  favorites: number[]
  addFavorite: (id: number) => void
  removeFavorite: (id: number) => void
  isFavorite: (id: number) => boolean
}

const FavoritesContext = createContext<
  FavoritesContextType | undefined
>(undefined)

interface FavoritesProviderProps {
  children: ReactNode
}

export function FavoritesProvider({
  children,
}: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const savedFavorites = localStorage.getItem('pokemon-favorites')

    if (!savedFavorites) {
      return []
    }

    try {
      return JSON.parse(savedFavorites)
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(
      'pokemon-favorites',
      JSON.stringify(favorites),
    )
  }, [favorites])

  function addFavorite(id: number) {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(id)) {
        return currentFavorites
      }

      return [...currentFavorites, id]
    })
  }

  function removeFavorite(id: number) {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((favoriteId) => favoriteId !== id),
    )
  }

  function isFavorite(id: number) {
    return favorites.includes(id)
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)

  if (!context) {
    throw new Error(
      'useFavorites debe utilizarse dentro de FavoritesProvider',
    )
  }

  return context
}