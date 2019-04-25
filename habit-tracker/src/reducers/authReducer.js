import authService from '../services/authService'

export const login = (userObject) => {
  return async dispatch => {
    const user = await authService.login(userObject)
    if (user) {
      authService.setToken(user.token)
      dispatch({
        type: 'LOGIN',
        data: user
      })
    }
  }
}

export const register = (userObject) => {
  return async dispatch => {
    const user = await authService.register(userObject)
    if (user) {
      authService.setToken(user.token)
      dispatch({
        type: 'LOGIN',
        data: user
      })
    }
  }
}

export const logout = () => {
  return async dispatch => {
    dispatch({
      type: 'LOGOUT'
    })
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