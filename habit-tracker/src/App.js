import React from 'react'
import { connect } from 'react-redux'
import MonthView from './components/MonthView'
import HabitForm from './components/HabitForm'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

const App = (props) => {

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

export default connect(mapStateToProps)(App)
