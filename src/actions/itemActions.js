import * as types from './types';
import itemsApi from '../../api/mockSearchApi';

export function loadItemsSuccess(items) {
  return { type: types.LOAD_ITEMS_SUCCESS, items};
}

export function loadItems() {
  return function(dispatch) {
    fetch(`http://localhost:8000/items/`)
    .then(response => response.json())
    //return itemsApi.getAllItems()
    .then(items => {
      console.log(items);
      dispatch(loadItemsSuccess(items));
    }).catch(error => {
      throw(error);
    });
  };
}

export function addItemSuccess(item) {
  console.log("in success function");
  return { type: types.ADD_ITEM_SUCCESS, item};
}

export function addItem({ name, color }) {
  return function(dispatch) {
    console.log("in actions", { name, color });

    fetch(`http://localhost:8000/items/`, {
      method: "POST",
      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
               },
      body: (JSON.stringify({ name, color }))
    })
    .then(response => response.json())
    //return itemsApi.deleteItem(id)
    //.then(response => response.json())
    .then(json => {
      console.log("response from add api", json);

      dispatch(deleteItemSuccess(json.item));
    }).catch(error => {
      throw(error);
    });
  };
};

export function deleteItemSuccess(id) {
  console.log("in success function");
  return { type: types.DELETE_ITEM_SUCCESS, id};
}

export function deleteItem(id) {
  return function(dispatch) {
    console.log("in actions", id);

    fetch(`http://localhost:8000/items/${id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    //return itemsApi.deleteItem(id)
    //.then(response => response.json())
    .then(json => {
      //response is a "success message"
      //return an alert saying deleted, then updates the table

      console.log("response from delete api", json);

      dispatch(deleteItemSuccess(json.id));
    }).catch(error => {
      throw(error);
    });
  };
}

export function editItemSuccess(item) {
  console.log("in success function");
  return { type: types.EDIT_ITEM_SUCCESS, item};
}

export function editItem(item) {
  return function(dispatch) {
    console.log("in actions", item);

    fetch(`http://localhost:8000/items/${item.id}`, {
      method: "PUT",
      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: (JSON.stringify(item))
    })
    .then(response => response.json())
    .then(json => {
      console.log("response from edit api", json);
      dispatch(editItemSuccess(json.item));
    }).catch(error => {
      throw(error);
    });
  };
}
