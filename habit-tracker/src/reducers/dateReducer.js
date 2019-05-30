import dateService from '../services/dateService'

export const initDates = () => {
  return async dispatch => {
    const dates = await dateService.getAll()
    dispatch({
      type: 'INITDATES',
      data: dates
    })
  }
}

export const addDate = (dateObject) => {
  return async dispatch => {
    const addedDate = await dateService.addNew(dateObject)
    dispatch({
      type: 'ADDDATE',
      data: {
        ...addedDate,
        habitsMarked: addedDate.habitsMarked.map(habit => habit.id)
      }
    })
  }
}

export const toggleHabit = (date, habit) => {
  return async dispatch => {
    const updatedDate = await dateService.update(date.id, habit)
    dispatch({
      type: 'TOGGLEHABIT',
      data: updatedDate
    })
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INITDATES':
      return action.data
    case 'ADDDATE':
      return state.concat(action.data)
    case 'TOGGLEHABIT':
      return state.map(date => date.id === action.data.id ? action.data : date)
    default:
      return state
  }
}

export default reducer