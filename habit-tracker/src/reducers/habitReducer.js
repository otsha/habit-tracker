const habitA = {
  name: 'Habit #A',
  important: false
}

const habitB = {
  name: 'Habit #B',
  important: true
}

const habitC = {
  name: 'Habit #C',
  important: false
}

const initialHabits = [habitA, habitB, habitC]

export const newHabit = (habitObject) => {
  return async dispatch => {
    dispatch({
      type: 'NEWHABIT',
      data: habitObject
    })
  }
}

// this needs to update to id-based deletion once the back-end has been implemented
export const deleteHabit = (habit) => {
  console.log('deleting', habit)
  return async dispatch => {
    dispatch({
      type: 'DELETEHABIT',
      data: habit
    })
  }
}

export const highlightHabit = (habit) => {
  console.log('highlightig', habit)
  habit.important = !habit.important
  return async dispatch => {
    dispatch({
      type: 'HIGHLIGHTHABIT',
      data: habit
    })
  }
}

const reducer = (state = initialHabits, action) => {
  switch (action.type) {
    case 'NEWHABIT':
      return state.concat(action.data)
    case 'DELETEHABIT':
      return state.filter(habit => habit.name !== action.data.name)
    case 'HIGHLIGHTHABIT':
      return state.map(habit => habit.name === action.data.name ? action.data : habit)
    default:
      return state
  }
}

export default reducer