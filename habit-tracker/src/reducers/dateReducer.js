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
  console.log('marking a date for the first time')
  return async dispatch => {
    const addedDate = await dateService.addNew(dateObject)
    dispatch({
      type: 'ADDDATE',
      data: addedDate
    })
  }
}

export const toggleHabit = (date, habit) => {
  /*if (date.habitsMarked.filter(h => h.id === habit.id).length > 0) {
    console.log('toggling', habit, 'OFF on', date)
    date.habitsMarked = date.habitsMarked.filter(h => h.id !== habit.id)
  } else {
    console.log('toggling', habit, 'ON on', date)
    date.habitsMarked = date.habitsMarked.concat(habit)
  }*/
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