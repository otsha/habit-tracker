export const addDate = (dateObject) => {
  const id = `${dateObject.year}${dateObject.month}${dateObject.day}`
  console.log('marking a date for the first time')
  console.log('> date created with id', id)
  return async dispatch => {
    dispatch({
      type: 'ADDDATE',
      data: {
        ...dateObject,
        id: id
      }
    })
  }
}

export const toggleHabit = (date, habit) => {
  if (date.habitsMarked.filter(h => h.name === habit.name).length > 0) {
    console.log('toggling', habit, 'OFF on', date)
    date.habitsMarked = date.habitsMarked.filter(h => h.name !== habit.name)
  } else {
    console.log('toggling', habit, 'ON on', date)
    date.habitsMarked = date.habitsMarked.concat(habit)
  }
  return async dispatch => {
    dispatch({
      type: 'TOGGLEHABIT',
      data: date
    })
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADDDATE':
      return state.concat(action.data)
    case 'TOGGLEHABIT':
      return state.map(date => date.id === action.data.id ? action.data : date)
    default:
      return state
  }
}

export default reducer