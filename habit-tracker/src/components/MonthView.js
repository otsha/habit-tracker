import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Habit from './Habit'
import { addDate } from '../reducers/dateReducer'

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const noOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const currentDate = new Date()
const currentMonth = currentDate.getMonth()
const currentYear = currentDate.getFullYear()

const headers = []
for (let i = 1; i <= noOfDays[currentMonth] + 1; i++) {
  const header = <th key={i}>{i}</th>
  headers.push(header)
}

const MonthView = (props) => {
  const [displayMonth, setDisplayMonth] = useState(currentMonth)
  const [displayYear, setDisplayYear] = useState(currentYear)
  const [habits, setHabits] = useState(props.habits)

  useEffect(() => {
    setHabits(props.habits)
  })

  /* add a date if it doesn't exist on the list yet */
  const addDate = (dateObject) => {
    const newDate = {
      ...dateObject,
      month: displayMonth + 1,
      year: displayYear
    }
    console.log(newDate)
    props.addDate(newDate)
  }

  const handleMonthChange = (value) => {
    if (value < 0) {
      setDisplayMonth(11)
      setDisplayYear(displayYear - 1)
    } else if (value > 11) {
      setDisplayMonth(0)
      setDisplayYear(displayYear + 1)
    } else {
      setDisplayMonth(value)
    }
  }

  return (
    <div>
      <h2>{`${monthNames[displayMonth]} (${displayMonth + 1}/${displayYear})`}</h2>
      <table>
        <tbody>
          <tr>
            <th>Habit</th>
            {headers.slice(0, noOfDays[displayMonth]).map(header => header)}
          </tr>
          {habits.map(h => <Habit key={h.name} habit={h} displayYear={displayYear} displayMonth={displayMonth} noOfDays={noOfDays[displayMonth]} addDate={addDate} />)}
        </tbody>
      </table>
      <button onClick={() => handleMonthChange(displayMonth - 1)}>previous month</button>
      <button onClick={() => handleMonthChange(displayMonth + 1)}>next month</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    habits: state.habits,
    dates: state.dates
  }
}

const mapDispatchToProps = {
  addDate
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthView)