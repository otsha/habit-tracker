import React, { useState, useEffect } from 'react'

const Habit = ({ habit, dates, noOfDays, addDate }) => {
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
                    <input type='checkbox' defaultChecked={isChecked} onClick={() => handleClick(habit.name, i)} />
                </td>
            boxes.push(box)
        }
        setCheckboxes(boxes)
    }, [])


    const handleClick = (name, i) => {
        console.log('Habit', name, 'clicked on day:', i)
        dates.filter(d => d.day === i)[0] === undefined
            ? addDate({ day: i, month: 3, year: 2019, habitsMarked: [habit] })
            : console.log('date already marked')
    }

    return (
        <tr>
            <td>{habit.name}</td>
            {checkboxes.map(box => box)}
        </tr>
    )
}

export default Habit