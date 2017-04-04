import * as types from './types'

export function loadItemsSuccess (items) {
  return { type: types.LOAD_ITEMS_SUCCESS, items }
}

export function loadItems () {
  return function (dispatch) {
    fetch(`http://localhost:8000/parties/`)
    .then(response => response.json())
    .then(items => {
      dispatch(loadItemsSuccess(items))
    }).catch(error => {
      throw (error)
    })
  }
}

export function addItemSuccess (item) {
  return { type: types.ADD_ITEM_SUCCESS, item }
}

export function addItem ({ name, size, phone }) {
  return function (dispatch) {
    fetch(`http://localhost:8000/parties/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: (JSON.stringify({ name, size, phone }))
    })
    .then(response => response.json())
    .then(json => {
      dispatch(addItemSuccess(json.item))
    }).catch(error => {
      throw (error)
    })
  }
}

export function deleteItemSuccess (id) {
  return { type: types.DELETE_ITEM_SUCCESS, id }
}

export function deleteItem (id) {
  return function (dispatch) {
    fetch(`http://localhost:8000/parties/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(json => {
      dispatch(deleteItemSuccess(id))
    }).catch(error => {
      throw (error)
    })
  }
}

export function editItem (item) {
  return function (dispatch) {
    fetch(`http://localhost:8000/parties/${item.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: (JSON.stringify(item))
    })
    .then(response => response.json())
    .then(json => {
      dispatch(loadItems())
    }).catch(error => {
      throw (error)
    })
  }
}

export function textNumber (item) {
  fetch(`http://localhost:8000/textsms/${item.phone}`)
  .then(function (response) {
    console.log('Text sent', response) // Unblocking error: Actions must be plain objects. Use custom middleware for async actions.
  })
  .catch(error => {
    throw (error)
  })
}
