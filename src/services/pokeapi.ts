import type {
  PokemonDetail,
  PokemonListResponse,
} from '../types/pokemon'

const API_URL = 'https://pokeapi.co/api/v2'

export async function getPokemons(): Promise<PokemonListResponse> {
  const response = await fetch(`${API_URL}/pokemon?limit=50`)

  if (!response.ok) {
    throw new Error('No se pudieron obtener los Pokémon')
  }

  const data: PokemonListResponse = await response.json()

  return data
}

export async function getPokemonById(
  id: string | number,
): Promise<PokemonDetail> {
  const response = await fetch(`${API_URL}/pokemon/${id}`)

  if (!response.ok) {
    throw new Error('No se pudo obtener el Pokémon')
  }

  const data: PokemonDetail = await response.json()

  return data
}