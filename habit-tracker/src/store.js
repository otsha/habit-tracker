import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import habitReducer from './reducers/habitReducer'
import dateReducer from './reducers/dateReducer'
import displayReducer from './reducers/displayReducer'

const reducer = combineReducers({
  habits: habitReducer,
  dates: dateReducer,
  display: displayReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store