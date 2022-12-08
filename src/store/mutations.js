import { public_key, secret_key} from '../marvel';
import axios from 'axios'


// function getCharacters(state){
//     state.characters = []

//     axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
//     .then((result) => {

//         result.data.data.results.forEach((item) => {
//         console.log(item)

//         state.characters.push(item)

//         state.url = `${item.thumbnail.path}/${item.thumbnail.extension}`

//         })
//     })
//     .catch((error) =>{
//         console.log(error)
//     }) 
// }

// function getCharacter(state, id){
//     state.character = []

//     axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?apikey=${public_key}`)
//     .then((result) => {
//       // console.log(result)

//       result.data.data.results.forEach((item) => {

//         state.character.push(item)

//         state.url = `${item.thumbnail.path}/`
//         console.log(result)
//         // console.log(state.url)
//         // console.log(state.extension)

//       })

//       state.charImg = `${result.data.data.results[0].thumbnail.path}/landscape_xlarge.${result.data.data.results[0].thumbnail.extension}`
//       console.log(result.data.data.results[0].thumbnail.extension)
//       state.extension = result.data.data.results[0].thumbnail.extension

//     })
//     .catch((error) =>{
//       console.log(error)
//     })
// }

export {
    // getCharacters,
    // getCharacter,
}