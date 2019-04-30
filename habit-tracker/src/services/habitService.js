import axios from 'axios'
import authService from './authService'

const url = 'http://localhost:3001/api/habits'

const getAll = async () => {
  const config = { headers: { Authorization: authService.getToken() } }
  const res = await axios.get(url, config)
  console.log('Server returned these habits:', res.data)
  return res.data
}

const addNew = async (habitObject) => {
  const config = { headers: { Authorization: authService.getToken() } }
  const res = await axios.post(url, habitObject, config)
  console.log(res.data)
  return res.data
}

const update = async (habitObject) => {
  const config = { headers: { Authorization: authService.getToken() } }
  const res = await axios.put(`${url}/${habitObject.id}`, habitObject, config)
  return res.data
}

const remove = async (id) => {
  const config = { headers: { Authorization: authService.getToken() } }
  const res = await axios.delete(`${url}/${id}`, config)
  console.log(res.data)
  return res.data
}

export default { getAll, addNew, update, remove }