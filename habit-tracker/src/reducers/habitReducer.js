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

    // Dispatch a notification (Handled @ notificationReducer.js)
    dispatch({
      type: 'SETNOTIFICATION',
      data: `Added new habit: ${habitObject.name}`
    })

    setTimeout(() => {
      dispatch({
        type: 'SETNOTIFICATION',
        data: null
      })
    }, 4000)
  }
}

export const deleteHabit = (habit) => {
  return async dispatch => {
    await habitService.remove(habit.id)
    dispatch({
      type: 'DELETEHABIT',
      data: habit
    })

    // Dispatch a notification (Handled @ notificationReducer.js)
    dispatch({
      type: 'SETNOTIFICATION',
      data: `Deleted habit: ${habit.name}`
    })

    setTimeout(() => {
      dispatch({
        type: 'SETNOTIFICATION',
        data: null
      })
    }, 4000)
  }
}

export const highlightHabit = (habit) => {
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