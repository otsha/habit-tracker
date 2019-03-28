import React, { useState, useEffect } from 'react'

const Habit = ({ habit, dates, noOfDays, addDate, month }) => {
    const [checkboxes, setCheckboxes] = useState([])

    useEffect(() => {
        let boxes = []
        for (let i = 1; i <= noOfDays; i++) {
            let isChecked = false
            const thisDate = dates.filter(d => d.day === i)[0]
            thisDate === undefined
                ? isChecked = false
                : isChecked = thisDate.habitsMarked.filter(h => h.name === habit.name).length > 0
            const box =
                <td key={i}>
                    <input
                        type='checkbox'
                        defaultChecked={isChecked}
                        onClick={() => handleClick(i)}
                    />
                    <button onClick={() => console.log(isChecked)}>debug</button>
                </td>
            boxes.push(box)
        }
        setCheckboxes(boxes)
        console.log('month:', month)
    })

    const handleClick = (i) => {
        console.log('Habit', habit.name, 'clicked on day:', i)
        const thisDate = dates.filter(d => d.day === i)[0]
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
        <tr>
            <td>{habit.name}</td>
            {checkboxes.slice(0, noOfDays).map(box => box)}
        </tr>
    )
}

export default Habit