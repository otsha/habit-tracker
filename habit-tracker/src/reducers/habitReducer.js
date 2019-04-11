import habitService from '../services/habitService'

export const initHabits = () => {
  return async dispatch => {
    const habits = await habitService.getAll()
    dispatch({
      type: 'INITHABITS',
      data: habits
    })
  }
}

export const newHabit = (habitObject) => {
  return async dispatch => {
    const addedHabit = await habitService.addNew(habitObject)
    dispatch({
      type: 'NEWHABIT',
      data: addedHabit
    })
  }
}

export const deleteHabit = (habit) => {
  console.log('deleting', habit)
  return async dispatch => {
    await habitService.remove(habit.id)
    dispatch({
      type: 'DELETEHABIT',
      data: habit
    })
  }
}

export const highlightHabit = (habit) => {
  console.log('highlighting', habit)
  habit.important = !habit.important
  return async dispatch => {
    const highlightedHabit = await habitService.update(habit)
    dispatch({
      type: 'HIGHLIGHTHABIT',
      data: highlightedHabit
    })
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INITHABITS':
      return action.data
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