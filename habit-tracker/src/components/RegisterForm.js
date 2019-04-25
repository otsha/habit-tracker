import React, { useState } from 'react'
import { connect } from 'react-redux'
import { register } from '../reducers/authReducer'

const RegisterForm = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const handleRegister = (event) => {
    event.preventDefault()
    password === passwordRepeat
      ? props.register({ username: username, password: password })
      : console.log('passwords not matching')
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

const mapDispatchToProps = {
  register
}

export default connect(null, mapDispatchToProps)(RegisterForm)