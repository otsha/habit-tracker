import React, { useState, useEffect } from 'react'

const Habit = ({ name, noOfDays }) => {
    const [checkboxes, setCheckboxes] = useState([])

    useEffect(() => {
        let boxes = []
        for (let i = 1; i <= noOfDays; i++) {
            const box = <td key={i}><input type='checkbox' onClick={() => handleClick(name, i)} /></td>
            boxes.push(box)
        }
        setCheckboxes(boxes)
    }, [])


    const handleClick = (name, i) => {
        console.log('Habit', name, 'clicked on day:', i)
    }

    return (
        <tr>
            <td>{name}</td>
            {checkboxes.map(box => box)}
        </tr>
    )
}

export default Habit