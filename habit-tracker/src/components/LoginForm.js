import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../reducers/authReducer'
import { Form } from 'semantic-ui-react'

const LoginForm = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    props.login({ username: username, password: password })
    setUsername('')
    setPassword('')
  }

  return (
    <div>
      <h2>Log In</h2>
      <Form onSubmit={handleLogin}>
        <Form.Input fluid label='Username' placeholder='Username' type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
        <Form.Input fluid label='Password' placeholder='********' type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
        <Form.Button type='submit'>Log in</Form.Button>
      </Form>
    </div>
  )
}

const mapDispatchToProps = {
  login
}

export default connect(null, mapDispatchToProps)(LoginForm)