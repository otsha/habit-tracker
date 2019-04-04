export const addDate = (dateObject) => {
  return async dispatch => {
    dispatch({
      type: 'ADDDATE',
      data: dateObject
    })
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADDDATE':
      return state.concat(action.data)
    default:
      return state
  }
}

export default reducer