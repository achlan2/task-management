import axios from 'axios'

const instance = axios.create({
  baseURL: "https://hapi5-api.herokuapp.com"
})

instance.defaults.headers.common['Authorization'] = process.env.REACT_APP_TOKEN

export default instance