import React from 'react'
import Habit from './Habit'

const HabitList = ({ dates, habits, noOfDays, addDate, removeHabit }) => {
    return (
        <>
            {habits.map(h => <Habit key={h.name} habit={h} dates={dates} noOfDays={noOfDays} addDate={addDate} removeHabit={removeHabit} />)}
        </>
    )
}

export default HabitList