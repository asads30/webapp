import axios from 'axios'

const api = axios.create({
  baseURL: 'https://promadm.click.uz/api',
  timeout: 10000
})

export { api }