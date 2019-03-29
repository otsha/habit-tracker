import React, { useState, useEffect } from 'react'

const Checkbox = ({ addDate, thisDate, defaultChecked, i, habit }) => {
    const [checked, setChecked] = useState(defaultChecked)

    useEffect(() => {
        thisDate === undefined
            ? setChecked(false)
            : setChecked(thisDate.habitsMarked.filter(h => h.name === habit.name).length > 0)
    })

    const handleClick = () => {
        console.log('Habit', habit.name, 'clicked on day:', i)
        thisDate === undefined
            ? addDate({ day: i, habitsMarked: [habit] })
            : toggle(thisDate)
    }

    const toggle = (thisDate) => {
        console.log('toggle')

        thisDate.habitsMarked.filter(h => h.name === habit.name).length > 0
            ? thisDate.habitsMarked = thisDate.habitsMarked.filter(h => h.name === habit.name)
            : thisDate.habitsMarked.push(habit)
    }

    return (
        <div style={{ border: 'solid', borderWidth: '1px', backgroundColor: '#d2d2d2', width: '20px' }} onClick={handleClick}>
            {checked
                ? 'x'
                : 'o'
            }
        </div>
    )
}

export default Checkbox