import React from 'react'
import Habit from './Habit'

const HabitList = ({ dates, habits, noOfDays, addDate, month }) => {
    return (
        <>
            {habits.map(h => <Habit key={h.name} habit={h} dates={dates} noOfDays={noOfDays} addDate={addDate} month={month} />)}
        </>
    )
}

export default HabitList