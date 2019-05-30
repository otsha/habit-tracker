import React from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'

const Notification = (props) => {
  return (
    <>
      {props.notification !== null
        ?
        <Message info>
          <Message.Header>{props.notification}</Message.Header>
        </Message>
        :
        <></>
      }

    </>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps)(Notification)