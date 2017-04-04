import * as types from '../actions/types'
// import {browserHistory} from 'react-router';

let initialState = {
  items: []
}

export default function itemReducer (state = initialState.items, action) {
  switch (action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      return action.items

    case types.ADD_ITEM_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.item)
      ]

    case types.DELETE_ITEM_SUCCESS:
      return state.filter(item => item.id !== action.id)

    default:
      return state
  }
}
