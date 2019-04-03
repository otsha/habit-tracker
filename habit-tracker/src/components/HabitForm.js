import React, { useState } from 'react'

const HabitForm = ({ addHabit }) => {
    const [habitName, setHabitName] = useState('')

    const handleNewHabit = (event) => {
        event.preventDefault()
        addHabit({ name: habitName })
        setHabitName('')
    }

    return (
        <div>
            <h3>Add a Habit</h3>
            <form onSubmit={handleNewHabit}>
                <input type='text' value={habitName} onChange={(event) => setHabitName(event.target.value)} />
                <button type='submit'>Add new...</button>
            </form>
        </div>
    )
}

export default HabitForm