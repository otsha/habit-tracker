import React, { useState } from 'react'
import { newHabit } from '../reducers/habitReducer'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'

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
      <Form onSubmit={handleNewHabit}>
        <Form.Input placeholder='Jogging' type='text' value={habitName} onChange={(event) => setHabitName(event.target.value)} />
        <Form.Button type='submit'>Add new...</Form.Button>
      </Form>
    </div>
  )
}

const mapDispatchToProps = {
  newHabit
}

export default connect(null, mapDispatchToProps)(HabitForm)