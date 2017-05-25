// React library
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// My library
import question from './question'

export default combineReducers({
  router: routerReducer,
  question,
})
