import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Habit from './Habit'
import { addDate, initDates } from '../reducers/dateReducer'
import { changeDisplayMonth } from '../reducers/displayReducer'
import { initHabits } from '../reducers/habitReducer'
import { Table, Button, Icon, Container, Label } from 'semantic-ui-react'

const headers = []
for (let i = 1; i <= 31; i++) {
  const header = <Table.HeaderCell key={i}>{i}</Table.HeaderCell>
  headers.push(header)
}

const MonthView = (props) => {

  useEffect(() => {
    props.initHabits()
  }, [])

  useEffect(() => {
    props.initDates()
  }, [])

  return (
    <Container>
      <h2>{`${props.display.displayMonthName} (${props.display.displayMonth + 1}/${props.display.displayYear})`}</h2>
      {props.display.displayMonth === props.display.currentDate.getMonth()
        ? <Label color="teal">Current Month</Label>
        : <></>
      }
      <Table striped celled compact='very'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Habit</Table.HeaderCell>
            {headers.slice(0, props.display.displayMonthLength).map(header => header)}
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.habits.map(h => <Habit key={h.name} habit={h} />)}
        </Table.Body>
      </Table>
      <Button onClick={() => props.changeDisplayMonth(props.display.displayMonth - 1)}>
        <Button.Content>
          <Icon name='angle left' />
        </Button.Content>
      </Button>
      <Button onClick={() => props.changeDisplayMonth(props.display.displayMonth + 1)}>
        <Button.Content>
          <Icon name='angle right' />
        </Button.Content>
      </Button>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    habits: state.habits,
    dates: state.dates,
    display: state.display
  }
}

const mapDispatchToProps = {
  addDate,
  changeDisplayMonth,
  initHabits,
  initDates
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthView)