import axios from 'axios'
import authService from './authService'

const url = '/api/dates'

const getAll = async () => {
  const config = { headers: { Authorization: authService.getToken() } }
  const res = await axios.get(url, config)
  return res.data
}

const addNew = async (dateObject) => {
  const config = { headers: { Authorization: authService.getToken() } }
  const res = await axios.post(url, dateObject, config)
  return res.data
}

const update = async (id, habit) => {
  const config = { headers: { Authorization: authService.getToken() } }
  const res = await axios.put(`${url}/${id}`, habit, config)
  return res.data
}

export default { getAll, addNew, update }