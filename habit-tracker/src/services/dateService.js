import axios from 'axios'
const url = 'http://localhost:3001/api/dates'

const getAll = async () => {
  const res = await axios.get(url)
  console.log('Server returned these dates:', res.data)
  return res.data
}

const addNew = async (dateObject) => {
  const res = await axios.post(url, dateObject)
  console.log(res.data)
  return res.data
}

const update = async (dateObject) => {
  // vvv not supposed to be sending a date object, but a habit object!!! fix
  const res = await axios.put(`${url}/${dateObject.id}`, dateObject)
  console.log(res.data)
  return res.data
}

export default { getAll, addNew, update }