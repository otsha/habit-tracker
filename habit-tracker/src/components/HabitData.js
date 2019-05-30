import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Progress, Segment } from 'semantic-ui-react'

const HabitData = ({ habit, dates, display }) => {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const datesDisplayedMonth = dates
      .filter(date => date.year === display.displayYear)
      .filter(date => date.month === display.displayMonth + 1)
    const datesWithHabit = datesDisplayedMonth
      .filter(date => date.habitsMarked.find(h => h === habit.id) !== undefined)
    const newPercentage = Math.round((datesWithHabit.length / display.displayMonthLength) * 100)
    setPercentage(newPercentage)
  }, [dates, display.displayMonthLength, display.displayMonth, habit.id])

  return (
    <Segment key={habit.id}>
      <h4>{habit.name}</h4>
      <Progress percent={percentage} indicating />
      {percentage} % daily habit
    </Segment>
  )
}

const mapStateToProps = (state) => {
  return {
    dates: state.dates,
    display: state.display,
    habits: state.habits
  }
}

export default connect(mapStateToProps)(HabitData)