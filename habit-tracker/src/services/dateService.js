import axios from 'axios'
import authService from './authService'

const url = 'http://localhost:3001/api/dates'

const getAll = async () => {
  const config = { headers: { Authorization: authService.getToken() } }
  const res = await axios.get(url, config)
  console.log('Server returned these dates:', res.data)
  return res.data
}

const addNew = async (dateObject) => {
  const config = { headers: { Authorization: authService.getToken() } }
  const res = await axios.post(url, dateObject, config)
  console.log('Server returned added date: ', res.data)
  return res.data
}

const update = async (id, habit) => {
  const config = { headers: { Authorization: authService.getToken() } }
  const res = await axios.put(`${url}/${id}`, habit, config)
  console.log('Server returned updated date:', res.data)
  return res.data
}

export default { getAll, addNew, update }