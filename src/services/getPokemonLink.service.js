import { getPokemon } from '../constants/endpoints.contant'

export const getPokemonLink = async (target) => {
  try {
    let endpoint = getPokemon(target)
    return await fetch(endpoint)
  } catch (error) {
    return console.erro('[ERRO NO FETCH]', error.message)
  }
}