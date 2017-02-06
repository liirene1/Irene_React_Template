import * as types from './types';

export function addItem(item) {
  return function(dispatch) {
    return Promise.resolve().then(() => {
      dispatch({ type: types.ADD_ITEM_SUCCESS, item });
    })
  };
};

export function deleteItem(item) {
  return function(dispatch) {
    return Promise.resolve().then(() => {
      dispatch({ type: types.DELETE_ITEM_SUCCESS, id: item.id });
    })
  };
};

export function loadItems() {
  return function(dispatch) {
    return Promise.resolve().then(() => {
      dispatch({
        type: types.LOAD_ITEMS_SUCCESS,
        items: [{
          id: 1,
          name: 'name 1',
          color: 'color 1'
        }, {
          id: 2,
          name: 'name 2',
          color: 'color 2'
        }]
      });
    })
  };
};
