import React from 'react'
import Habit from './Habit'

// deprecated for now
const HabitList = ({ dates, habits, noOfDays, addDate }) => {
  return (
    <>
      {habits.map(h => <Habit key={h.name} habit={h} dates={dates} noOfDays={noOfDays} addDate={addDate} />)}
    </>
  )
}

export default HabitList