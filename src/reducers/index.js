import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import items from './itemReducer'

export default combineReducers({
  form,
  items
})
