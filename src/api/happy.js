import axios from 'axios'

const instance = axios.create({
  baseURL: "https://hapi5-api.herokuapp.com"
})

instance.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjozMH0.wvlf_rdsogmcfydXu1JnbKSpJG_QSufuMSDtd0lxRss"

export default instance