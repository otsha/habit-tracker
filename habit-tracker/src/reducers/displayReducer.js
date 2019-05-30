const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const noOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const currentDate = new Date()
const currentMonth = currentDate.getMonth()

const init = {
  currentDate: currentDate,
  displayMonth: currentMonth,
  displayYear: currentDate.getFullYear(),
  displayMonthName: monthNames[currentMonth],
  displayMonthLength: noOfDays[currentMonth]
}

export const changeDisplayMonth = (value) => {
  return async dispatch => {
    dispatch({
      type: 'CHANGEMONTH',
      data: value
    })
  }
}

const reducer = (state = init, action) => {
  switch (action.type) {
    case 'CHANGEMONTH':
      if (action.data < 0) {
        return {
          currentDate: state.currentDate,
          displayMonth: 11,
          displayYear: state.displayYear - 1,
          displayMonthName: monthNames[11],
          displayMonthLength: noOfDays[11]
        }
      } else if (action.data > 11) {
        return {
          currentDate: state.currentDate,
          displayMonth: 0,
          displayYear: state.displayYear + 1,
          displayMonthName: monthNames[0],
          displayMonthLength: noOfDays[0]
        }
      } else {
        return {
          currentDate: state.currentDate,
          displayMonth: action.data,
          displayYear: state.displayYear,
          displayMonthName: monthNames[action.data],
          displayMonthLength: noOfDays[action.data]
        }
      }
    default:
      return state
  }
}

export default reducer