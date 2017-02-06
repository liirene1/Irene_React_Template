import * as types from '../actions/types';
//import {browserHistory} from 'react-router';

let initialState = {
  items: []
}

export default function itemReducer(state=initialState, action) {
  switch (action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      return Object.assign({}, state, {items: action.items});

    case types.ADD_ITEM_SUCCESS:
      const newState = Object.assign({}, state);
      newState.items.push(action.item);
      console.log(newState);
      return newState;

    case types.DELETE_ITEM_SUCCESS:
      const items = state.items.filter(function(item) {
        return item.id !== action.id;
      });
      console.log("new items state in reducer", items);
      return Object.assign({}, state, {items});

    case types.EDIT_ITEM_SUCCESS:
      newState = Object.assign({}, state);
      const indexToEdit = state.items.findIndex(function (item) {
        return item.id == action.item.id;
      })
      console.log(indexToEdit);
      newState.items[indexToEdit] = action.item;
      console.log("new state in edit reducer", newState);
      return newState;

    default:
      return state;
  }
}
