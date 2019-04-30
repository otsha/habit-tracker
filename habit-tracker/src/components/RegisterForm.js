import React, { useState } from 'react'
import authService from '../services/authService'

const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const handleRegister = async (event) => {
    event.preventDefault()

    if (password === passwordRepeat) {
      const registeredUser = await authService.register({ username: username, password: password })
      if (registeredUser) {
        console.log('registration successful')
      } else {
        console.log('registration failed')
      }
    } else {
      console.log('passwords not matching')
    }

    setUsername('')
    setPassword('')
    setPasswordRepeat('')
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <p>Username</p>
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
        <p>Password</p>
        <input type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
        <p>Repeat Password</p>
        <input type='password' value={passwordRepeat} onChange={(event) => setPasswordRepeat(event.target.value)} />
        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}

export default RegisterForm