import React, { useState } from 'react'
import authService from '../services/authService'
import { Form, Label, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const RegisterForm = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const handleRegister = async (event) => {
    event.preventDefault()

    if (password === passwordRepeat) {
      const registeredUser = await authService.register({ username: username, password: password })
      if (registeredUser) {
        props.setNotification('Registration successful! You may now log in.')
      } else {
        props.setNotification('Registration failed. Username may already be in use.')
      }
    } else {
      props.setNotification('Passwords Not Matching')
    }

    setUsername('')
    setPassword('')
    setPasswordRepeat('')
  }

  return (
    <div>
      <h2>Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Input fluid label='Username' placeholder='Enter your desired username' type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
        <Form.Input fluid label='Password' placeholder='Password' type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
        <Form.Input fluid label='Repeat Password' placeholder='Repeat Password' type='password' value={passwordRepeat} onChange={(event) => setPasswordRepeat(event.target.value)} />
        <Divider hidden />
        <Label basic color='red'>By registering you agree not to store truly sensitive information on this website</Label>
        <Divider hidden />
        <Form.Button type='submit'>Register</Form.Button>
      </Form>
    </div>
  )
}

const mapDispatchToProps = {
  setNotification
}

export default connect(null, mapDispatchToProps)(RegisterForm)