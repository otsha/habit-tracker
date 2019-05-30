import authService from '../services/authService'

export const login = (userObject) => {
  return async dispatch => {
    const user = await authService.login(userObject)
    if (user) {
      authService.setToken(user.token)
      window.localStorage.setItem('user', JSON.stringify(user))
      dispatch({
        type: 'LOGIN',
        data: user
      })
    } else {
      // Dispatch an error message
      // (notifications are handled by notificationReducer.js)
      dispatch({
        type: 'SETNOTIFICATION',
        data: 'Login failed. Invalid username or password.'
      })

      setTimeout(() => {
        dispatch({
          type: 'SETNOTIFICATION',
          data: null
        })
      }, 4000)
    }
  }
}

export const autoLogin = (userObject) => {
  return async dispatch => {
    authService.setToken(userObject.token)
    dispatch({
      type: 'LOGIN',
      data: userObject
    })
  }
}

export const logout = () => {
  return async dispatch => {
    window.localStorage.setItem('user', null)
    dispatch({
      type: 'LOGOUT'
    })

    // Dispatch a logout notification
    // (notifications are handled by notificationReducer.js)
    dispatch({
      type: 'SETNOTIFICATION',
      data: 'Logged out!'
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
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return null
    default:
      return state
  }
}

export default reducer