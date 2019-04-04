import React from 'react'
import MonthView from './components/MonthView'
import HabitForm from './components/HabitForm'

const App = () => {
  return (
    <div>
      <h1>Habit Tracker</h1>
      <MonthView />
      <HabitForm />
    </div>
  )
}

export default App
