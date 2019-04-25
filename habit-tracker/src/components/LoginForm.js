import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../reducers/authReducer'

const LoginForm = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    console.log(username, password)
    props.login({ username: username, password: password })
    setUsername('')
    setPassword('')
  }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
        <p>Username</p>
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
        <p>Password</p>
        <input type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  login
}

export default connect(null, mapDispatchToProps)(LoginForm)