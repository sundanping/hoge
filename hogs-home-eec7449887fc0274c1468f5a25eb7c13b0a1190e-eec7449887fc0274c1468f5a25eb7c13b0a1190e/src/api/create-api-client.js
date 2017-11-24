import axios from 'axios'

export function createAPI ({ baseURL }) {
  let api = {}
  api.fetch = axios.create({
    baseURL: baseURL
  })
  return api
}
