// React library
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// My library
import counter from './counter'

export default combineReducers({
  router: routerReducer,
  counter,
})
