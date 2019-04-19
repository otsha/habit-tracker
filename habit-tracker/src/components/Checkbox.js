import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addDate, toggleHabit } from '../reducers/dateReducer'

const Checkbox = ({ thisDate, i, habit, display, addDate, toggleHabit, dates }) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const date = dates.filter(d => d.year === display.displayYear).filter(d => d.month === display.displayMonth + 1).find(d => d.day === i)
    /*
    date === undefined
      ? setChecked(false)
      : setChecked(date.habitsMarked.find(h => String(h) === String(habit.id)) !== undefined)
    */

    // debug
    let marked = false
    if (date !== undefined) {
      const hab = date.habitsMarked.find(h => h === habit.id)
      if (hab !== undefined) {
        marked = true
      } else {
        date.habitsMarked.find(h => console.log(h, 'vs', habit.id))
        console.log('hab was reported as not defined, was:', hab)
      }
      setChecked(marked)
      console.log('changed box', i, 'for habit', habit.name, 'status to', checked, 'because date was', date, 'and habit was marked as', marked)
    } else {
      setChecked(marked)
      console.log('changed box', i, 'for habit', habit.name, 'status to', checked, 'because date was', date)
    }
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