import axios from 'axios'

const api = axios.create({
  baseURL: 'https://promadm.click.uz/api',
  timeout: 5000
})

axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  console.log(error)
})


export { api }