import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import MonthView from './components/MonthView'
import HabitForm from './components/HabitForm'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import { autoLogin, logout } from './reducers/authReducer'

const App = (props) => {

  useEffect(() => {
    const storedUser = JSON.parse(window.localStorage.getItem('user'))
    console.log('found stored user:', storedUser)
    if (storedUser && storedUser.token) {
      props.autoLogin(storedUser)
    }
  }, [])

  const loginView = () => {
    return (
      <div>
        <LoginForm />
        <RegisterForm />
      </div>
    )
  }

  const homeView = () => {
    return (
      <div>
        <p>Logged in as {props.auth.username}</p>
        <button onClick={props.logout} >Log out</button>
        <MonthView />
        <HabitForm />
      </div>
    )
  }

  return (
    <div>
      <h1>Habit Tracker</h1>
      {props.auth === null ? loginView() : homeView()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = {
  autoLogin,
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
