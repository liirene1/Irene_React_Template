import * as types from './types'

export function addItem (item) {
  return function (dispatch) {
    return Promise.resolve().then(() => {
      dispatch({ type: types.ADD_ITEM_SUCCESS, item })
    })
  }
};

export function deleteItem (item) {
  return function (dispatch) {
    return Promise.resolve().then(() => {
      dispatch({ type: types.DELETE_ITEM_SUCCESS, id: item.id })
    })
  }
};

export function loadItems () {
  return function (dispatch) {
    return Promise.resolve().then(() => {
      dispatch({
        type: types.LOAD_ITEMS_SUCCESS,
        items: [{
          id: 1,
          name: 'Irene',
          size: '1',
          phone: '7181234580',
          timeReserved: '4:40'
        }, {
          id: 2,
          name: 'Tim',
          size: '2',
          phone: '3470295029',
          timeReserved: '5:59'
        }]
      })
    })
  }
};
