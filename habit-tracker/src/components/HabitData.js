import React from 'react'
import { connect } from 'react-redux'

const HabitData = ({ habit, dates }) => {
  return (
    <div>
      <h3>{habit.name}</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    dates: state.dates
  }
}

export default connect(mapStateToProps)(HabitData)