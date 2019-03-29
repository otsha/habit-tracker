import React, { useState, useEffect } from 'react'
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
    },
    {
        day: 6,
        month: 4,
        year: 2019,
        habitsMarked: [habitA, habitC]
    }
]

const currentDate = new Date()
const currentMonth = 0

const headers = []
for (let i = 1; i <= noOfDays[currentMonth]; i++) {
    const header = <th key={i}>{i}</th>
    headers.push(header)
}

const MonthView = () => {
    const [displayMonth, setDisplayMonth] = useState(currentMonth)
    const [dates, setDates] = useState([])

    useEffect(() => {
        setDates(dateList.filter(date => date.month === displayMonth + 1))
    })

    /* add a date if it doesn't exist on the list yet */
    const addDate = (dateObject) => {
        const newDate = {
            ...dateObject,
            month: displayMonth + 1,
            year: currentDate.getFullYear()
        }
        console.log(newDate)
        dateList.push(newDate)
    }

    const handleMonthChange = (value) => {
        setDisplayMonth(value)
        setDates(dateList.filter(d => d.month === displayMonth + 1))
    }

    return (
        <div>
            <h2>{`${monthNames[displayMonth]} (${displayMonth + 1}/${currentDate.getFullYear()})`}</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Habit</th>
                        {headers.slice(0, noOfDays[displayMonth]).map(header => header)}
                    </tr>
                    <HabitList dates={dates} habits={habits} noOfDays={noOfDays[displayMonth]} addDate={addDate} month={displayMonth} />
                </tbody>
            </table>
            <button onClick={() => handleMonthChange(displayMonth - 1)}>previous month</button>
            <button onClick={() => handleMonthChange(currentMonth)}>current month</button>
            <button onClick={() => handleMonthChange(displayMonth + 1)}>next month</button>
            <button onClick={() => console.log(dates)}>debug: show dates</button>
        </div>
    )
}

export default MonthView