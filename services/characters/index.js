import http from '../../plugins/axios'
import { public_key} from '../../src/marvel';


const getCharacters = () => {
    try {
      const res = http.get(`characters?apikey=${public_key}`)
      return res
    } catch (error) {
      throw error
    }
  }


const getCharacter = (id) => {
  try {
    const result = http.get(`characters/${id}?apikey=${public_key}`)
    return result
  } catch (error) {
    throw error
  }
}

export {
    getCharacters,
    getCharacter
}