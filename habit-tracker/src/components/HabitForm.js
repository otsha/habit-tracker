import React, { useState } from 'react'
import { newHabit } from '../reducers/habitReducer'
import { connect } from 'react-redux'

const HabitForm = (props) => {
  const [habitName, setHabitName] = useState('')

  const handleNewHabit = (event) => {
    event.preventDefault()
    props.newHabit({ name: habitName, important: false })
    setHabitName('')
  }

  return (
    <div>
      <h3>Add a Habit</h3>
      <form onSubmit={handleNewHabit}>
        <input type='text' value={habitName} onChange={(event) => setHabitName(event.target.value)} />
        <button type='submit'>Add new...</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  newHabit
}

export default connect(null, mapDispatchToProps)(HabitForm)