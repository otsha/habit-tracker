import React, { useState, useEffect } from 'react'
import Checkbox from './Checkbox'

const Habit = ({ habit, dates, noOfDays, addDate, month }) => {
    const [checkboxes, setCheckboxes] = useState([])

    useEffect(() => {
        let boxes = []
        for (let i = 1; i <= noOfDays; i++) {
            const thisDate = dates.filter(d => d.day === i)[0]
            let isChecked = false
            if (thisDate !== undefined) {
                thisDate.habitsMarked.filter(h => h.name === habit.name) > 0 ? isChecked = true : isChecked = false
            }
            const box = { thisDate, i, habit, isChecked }
            boxes.push(box)
        }
        setCheckboxes(boxes)
        console.log('month:', month)
    })

    return (
        <tr>
            <td>{habit.name}</td>
            {checkboxes.map(box =>
                <td key={box.i}>
                    <Checkbox addDate={addDate} thisDate={box.thisDate} i={box.i} habit={box.habit} defaultChecked={box.isChecked} />
                </td>)
            }
        </tr>
    )
}

export default Habit