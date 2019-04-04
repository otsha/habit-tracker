import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Checkbox from './Checkbox'
import { deleteHabit } from '../reducers/habitReducer'

const Habit = ({ habit, dates, noOfDays, deleteHabit, displayYear, displayMonth }) => {
  const [displayDates, setDisplayDates] = useState(dates)
  const [checkboxes, setCheckboxes] = useState([])

  useEffect(() => {
    const dateList = dates.filter(date => date.year === displayYear).filter(date => date.month === displayMonth + 1)
    setDisplayDates(dateList)
  })

  useEffect(() => {
    let boxes = []
    for (let i = 1; i <= noOfDays; i++) {
      const thisDate = displayDates.filter(d => d.day === i)[0]
      const box = { thisDate, i, habit, displayMonth, displayYear }
      boxes.push(box)
    }
    setCheckboxes(boxes)
  })

  return (
    <tr>
      <td>{habit.name}</td>
      {checkboxes.map(box =>
        <td key={box.i}>
          <Checkbox {...box} />
        </td>)
      }
      <td><button onClick={() => deleteHabit(habit)}>x</button></td>
    </tr>
  )
}

const mapStateToProps = (state) => {
  return ({
    dates: state.dates
  })
}

const mapDispatchToProps = {
  deleteHabit
}

export default connect(mapStateToProps, mapDispatchToProps)(Habit)