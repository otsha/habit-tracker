import React from 'react'
import HabitList from './HabitList'

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const noOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const MonthView = () => {
    const date = new Date()
    const month = date.getMonth()

    return (
        <div>
            <h2>{`${monthNames[month]} ${date.getFullYear()}`}</h2>
            <HabitList noOfDays={noOfDays[month]} />
        </div>
    )

}

export default MonthView