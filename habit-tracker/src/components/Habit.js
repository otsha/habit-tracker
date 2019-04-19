import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Checkbox from './Checkbox'
import { deleteHabit, highlightHabit } from '../reducers/habitReducer'

const Habit = ({ habit, dates, display, deleteHabit, highlightHabit }) => {
  const [displayDates, setDisplayDates] = useState(dates)
  const [checkboxes, setCheckboxes] = useState([])
  const [highlighted, setHighlighted] = useState(false)

  useEffect(() => {
    const dateList = dates.filter(date => date.year === display.displayYear).filter(date => date.month === display.displayMonth + 1)
    setDisplayDates(dateList)
  })

  useEffect(() => {
    let boxes = []
    for (let i = 1; i <= display.displayMonthLength; i++) {
      const thisDate = displayDates.find(d => d.day === i)
      const box = { thisDate, i, habit }
      boxes.push(box)
    }
    setCheckboxes(boxes)
  })

  useEffect(() => {
    setHighlighted(habit.important)
  }, [])

  const toggleHighlighted = () => {
    setHighlighted(!highlighted)
    highlightHabit(habit)
  }

  return (
    <tr>
      <td onClick={toggleHighlighted} style={highlighted ? { backgroundColor: 'yellow' } : { backgroundColor: '' }}>{habit.name}</td>
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
    dates: state.dates,
    display: state.display
  })
}

const mapDispatchToProps = {
  deleteHabit,
  highlightHabit
}

export default connect(mapStateToProps, mapDispatchToProps)(Habit)