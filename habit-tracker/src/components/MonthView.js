import React from 'react'
import { connect } from 'react-redux'
import Habit from './Habit'
import { addDate } from '../reducers/dateReducer'
import { changeDisplayMonth } from '../reducers/displayReducer'

const headers = []
for (let i = 1; i <= 31; i++) {
  const header = <th key={i}>{i}</th>
  headers.push(header)
}

const MonthView = (props) => {
  return (
    <div>
      <h2>{`${props.display.displayMonthName} (${props.display.displayMonth + 1}/${props.display.displayYear})`}</h2>
      <table>
        <tbody>
          <tr>
            <th>Habit</th>
            {headers.slice(0, props.display.displayMonthLength).map(header => header)}
          </tr>
          {props.habits.map(h => <Habit key={h.name} habit={h} />)}
        </tbody>
      </table>
      <button onClick={() => props.changeDisplayMonth(props.display.displayMonth - 1)}>previous month</button>
      <button onClick={() => props.changeDisplayMonth(props.display.displayMonth + 1)}>next month</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    habits: state.habits,
    dates: state.dates,
    display: state.display
  }
}

const mapDispatchToProps = {
  addDate,
  changeDisplayMonth
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthView)