import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import MonthView from './components/MonthView'
import HabitForm from './components/HabitForm'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import { autoLogin, logout } from './reducers/authReducer'
import { Container, Button, Icon, Menu, Header, Grid, Segment, Divider } from 'semantic-ui-react'

const App = (props) => {

  useEffect(() => {
    const storedUser = JSON.parse(window.localStorage.getItem('user'))
    console.log('found stored user:', storedUser)
    if (storedUser && storedUser.token) {
      props.autoLogin(storedUser)
    }
  }, [])

  const loginView = () => {
    return (
      <Container>
        <Header as='h1'>
          <Icon name='paperclip' />
          <Header.Content>Habit Tracker</Header.Content>
        </Header>
        <Segment>
          <Grid columns='2' relaxed stackable>
            <Grid.Column>
              <LoginForm />
            </Grid.Column>
            <Grid.Column verticalAlign='middle'>
              <RegisterForm />
            </Grid.Column>
          </Grid>
          <Divider vertical>Or</Divider>
        </Segment>
      </Container>
    )
  }

  const homeView = () => {
    return (
      <>
        <Menu>
          <Menu.Item header color='violet' name='title'>
            <Icon name='paperclip' />
            Habit Tracker
          </Menu.Item>
          <Menu.Item name='loggedInUser'>Logged in as {props.auth.username}</Menu.Item>
          <Menu.Item position='right' name='logout'>
            <Button animated onClick={props.logout}>
              <Button.Content hidden>Log Out</Button.Content>
              <Button.Content visible><Icon name='log out' /></Button.Content>
            </Button>
          </Menu.Item>
        </Menu>
        <Container>
          <MonthView />
          <Divider horizontal>New Habit</Divider>
          <HabitForm />
        </Container>
      </>
    )
  }

  return (
    <Container fluid>
      {props.auth === null ? loginView() : homeView()}
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = {
  autoLogin,
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
