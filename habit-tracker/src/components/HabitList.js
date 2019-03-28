import React, { useState, useEffect } from 'react'
import Habit from './Habit'

const HabitList = ({ dates, habits, noOfDays, addDate }) => {
    const [headers, setHeaders] = useState([])

    // Set the table headers according to the number of days in the current month
    useEffect(() => {
        let h = []
        for (let i = 1; i <= noOfDays; i++) {
            const header = <th key={i}>{i}</th>
            h.push(header)
        }

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
                    {habits.map(h => <Habit key={h.name} habit={h} dates={dates} noOfDays={noOfDays} addDate={addDate} />)}
                </tbody>
            </table>
        </div>
    )
}

export default HabitList