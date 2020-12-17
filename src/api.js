import axios from 'axios'

export const get_history = axios.create({
  method: 'get',
  url: '/get_history',
})
