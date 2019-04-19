import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addDate, toggleHabit } from '../reducers/dateReducer'

const Checkbox = ({ thisDate, i, habit, display, addDate, toggleHabit, dates }) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const date = dates.filter(d => d.year === display.displayYear).filter(d => d.month === display.displayMonth + 1).find(d => d.day === i)
    date === undefined
      ? setChecked(false)
      : setChecked(date.habitsMarked.find(h => String(h) === String(habit.id)) !== undefined)
  })

  const handleClick = () => {
    console.log('Habit', habit.name, 'clicked on day:', i)
    thisDate === undefined
      ? addDate({ day: i, month: display.displayMonth + 1, year: display.displayYear, habitsMarked: [habit] })
      : toggleHabit(thisDate, habit)
    setChecked(!checked)
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

const mapStateToProps = (state) => {
  return ({
    dates: state.dates,
    display: state.display
  })
}

const mapDispatchToProps = {
  addDate,
  toggleHabit
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox)