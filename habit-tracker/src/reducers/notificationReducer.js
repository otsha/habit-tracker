export const setNotification = (message) => {
  return async dispatch => {
    dispatch({
      type: 'SETNOTIFICATION',
      data: message
    })

    setTimeout(() => {
      dispatch({
        type: 'SETNOTIFICATION',
        data: null
      })
    }, 4000)
  }
}

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'SETNOTIFICATION':
      return action.data
    default:
      return state
  }
}

export default reducer