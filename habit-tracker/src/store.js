import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import habitReducer from './reducers/habitReducer'
import dateReducer from './reducers/dateReducer'

const reducer = combineReducers({
    habits: habitReducer,
    dates: dateReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store