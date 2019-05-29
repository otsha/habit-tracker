import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Checkbox from './Checkbox'
import { deleteHabit, highlightHabit } from '../reducers/habitReducer'
import { Table, Button, Icon } from 'semantic-ui-react'

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
    <Table.Row>
      <Table.Cell onClick={toggleHighlighted} style={highlighted ? { backgroundColor: 'yellow' } : { backgroundColor: '' }}>{habit.name}</Table.Cell>
      {checkboxes.map(box =>
        <Table.Cell key={box.i}>
          <Checkbox {...box} />
        </Table.Cell>)
      }
      <Table.Cell>
        <Button animated color='red' onClick={() => deleteHabit(habit)}>
          <Button.Content visible>
            <Icon name='delete'/>
          </Button.Content>
          <Button.Content hidden>
            DELETE
          </Button.Content>
        </Button>
      </Table.Cell>
    </Table.Row>
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