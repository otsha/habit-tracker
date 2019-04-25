import axios from 'axios'
const url = 'http://localhost:3001/api/auth'

let token = null

const setToken = (tokenToSet) => {
  token = `bearer ${tokenToSet}`
}

const getToken = () => {
  return token
}

const register = async (userObject) => {
  const res = await axios.post(`${url}/register`, userObject)
  console.log('Registration attempt returned', res)
  if (res.data.error) {
    return null
  }
  return res.data
}

const login = async (userObject) => {
  const res = await axios.post(`${url}/login`, userObject)
  console.log('Login attempt returned', res.data)
  if (res.data.error) {
    return null
  }
  return res.data
}

export default { register, login, setToken, getToken }