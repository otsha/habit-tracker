const habitA = {
  name: 'Habit #A'
}

const habitB = {
  name: 'Habit #B'
}

const habitC = {
  name: 'Habit #C'
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

const reducer = (state = initialHabits, action) => {
  switch (action.type) {
    case 'NEWHABIT':
      return state.concat(action.data)
    case 'DELETEHABIT':
      return state.filter(habit => habit.name !== action.data.name)
    default:
      return state
  }
}

export default reducer