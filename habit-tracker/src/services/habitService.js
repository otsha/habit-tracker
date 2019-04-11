import axios from 'axios'
const url = 'http://localhost:3001/api/habits'

const getAll = async () => {
  const res = await axios.get(url)
  console.log(res.data)
  return res.data
}

const addNew = async (habitObject) => {
  const res = await axios.post(url, habitObject)
  console.log(res.data)
  return res.data
}

const update = async (habitObject) => {
  const res = await axios.put(`${url}/${habitObject.id}`, habitObject)
  console.log(res.data)
  return res.data
}

const remove = async (id) => {
  const res = await axios.delete(`${url}/${id}`)
  console.log(res.data)
  return res.data
}

export default { getAll, addNew, update, remove }