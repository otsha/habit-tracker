import React, { useState, useEffect } from 'react'
import Habit from './Habit'

const habits = [
    {
        name: 'Habit #1'
    },
    {
        name: 'Habit #2'
    },
    {
        name: 'Habit #3'
    },
]

const HabitList = ({ noOfDays }) => {
    const [headers, setHeaders] = useState([])

    // Set the table headers according to the number of days in the current month
    useEffect(() => {
        let h = []
        for (let i = 1; i <= noOfDays; i++) {
            const header = <th key={i}>{i}</th>
            h.push(header)
        }

        console.log(h)
        setHeaders(h)
    }, [])

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Habit</th>
                        {headers.map(h => h)}
                    </tr>
                    {habits.map(h =>
                        <Habit key={h.name} name={h.name} noOfDays={noOfDays} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default HabitList