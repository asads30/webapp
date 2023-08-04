import axios from 'axios'

const api = axios.create({
  baseURL: 'https://promadm.click.uz/api',
  timeout: 5000
})

export { api }