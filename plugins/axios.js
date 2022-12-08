import axios from 'axios'

const http = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default http