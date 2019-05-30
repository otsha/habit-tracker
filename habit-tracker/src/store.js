import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import habitReducer from './reducers/habitReducer'
import dateReducer from './reducers/dateReducer'
import displayReducer from './reducers/displayReducer'
import authReducer from './reducers/authReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  habits: habitReducer,
  dates: dateReducer,
  display: displayReducer,
  auth: authReducer,
  notification: notificationReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store