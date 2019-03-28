import React, { useState } from 'react'
import HabitList from './HabitList'

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const noOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const habitA = {
    name: 'Habit #A'
}

const habitB = {
    name: 'Habit #B'
}

const habitC = {
    name: 'Habit #C'
}

const habits = [habitA, habitB, habitC]

const dateList = [
    {
        day: 2,
        month: 3,
        year: 2019,
        habitsMarked: [habitA, habitB, habitC]
    },
    {
        day: 12,
        month: 3,
        year: 2019,
        habitsMarked: [habitA, habitB]
    },
    {
        day: 5,
        month: 3,
        year: 2019,
        habitsMarked: [habitC]
    }
]

const currentDate = new Date()
const currentMonth = currentDate.getMonth()

const MonthView = () => {
    const [month, setMonth] = useState(currentMonth)
    const [dates, setDates] = useState([])
    const [length, setLength] = useState([noOfDays[month]])

    const addDate = (dateObject) => {
        console.log(dateObject)
        dateList.push(dateObject)
        setDates(dateList)
    }

    const changeMonth = (n) => {
        setMonth(month + n)
        setDates(dateList.filter(d => d.month === month))
        setLength(noOfDays[month])
    }

    return (
        <div>
            <h2>{`${monthNames[month]} ${currentDate.getFullYear()}`}</h2>
            <HabitList dates={dates} habits={habits} noOfDays={length} addDate={addDate} />
            <button onClick={() => changeMonth(-1)}>previous month</button>
            <button onClick={() => changeMonth(1)}>next month</button>
        </div>
    )
}

export default MonthView