import React from 'react'
import { connect } from 'react-redux'
import HabitData from './HabitData'

const HabitDataList = (props) => {
  return (
    <>
      {props.habits.map(habit => <HabitData key={habit.id} habit={habit} />)}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    habits: state.habits
  }
}

export default connect(mapStateToProps)(HabitDataList)