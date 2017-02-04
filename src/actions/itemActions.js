import * as types from './types';
import itemsApi from '../../api/mockSearchApi';

export function loadItemsSuccess(items) {
  return { type: types.LOAD_ITEMS_SUCCESS, items};
}

export function loadItems() {
  return function(dispatch) {
    return itemsApi.getAllItems().then(items => {
      console.log(items);
      dispatch(loadItemsSuccess(items));
    }).catch(error => {
      throw(error);
    });
  };
}
