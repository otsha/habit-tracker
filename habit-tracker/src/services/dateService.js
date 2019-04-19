import axios from 'axios'
const url = 'http://localhost:3001/api/dates'

const getAll = async () => {
  const res = await axios.get(url)
  console.log('Server returned these dates:', res.data)
  return res.data
}

const addNew = async (dateObject) => {
  const res = await axios.post(url, dateObject)
  console.log('Server returned added date: ', res.data)
  return res.data
}

const update = async (id, habit) => {
  const res = await axios.put(`${url}/${id}`, habit)
  console.log('Server returned updated date:', res.data)
  return res.data
}

export default { getAll, addNew, update }