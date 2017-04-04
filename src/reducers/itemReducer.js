import * as types from '../actions/types'
// import {browserHistory} from 'react-router';

let initialState = {
  items: []
}

export default function itemReducer (state = initialState.items, action) {
  switch (action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      console.log('triggered load', action.items)
      return action.items

    case types.ADD_ITEM_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.item)
      ]

    case types.DELETE_ITEM_SUCCESS:
      console.log('delete reducer', action.id)
      return state.filter(item => item.id !== action.id)

    default:
      return state
  }
}
