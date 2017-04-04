// This file mocks a web API by working with the hard-coded data below.
// All calls return promises.
const items = [
  {
    id: 1,
    name: 'shirt',
    color: 'blue'
  },
  {
    id: 2,
    name: 'skirt',
    color: 'red'
  }
]

// This would be performed on the server in a real app. Just stubbing in.
const generateId = (items) => {
  return items.length
}

class ItemsApi {
  static getAllItems (start, end) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], items))
      }, 100)
    })
  }

  static deleteItem (itemId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexToDelete = items.findIndex(item => {
          item.id == itemId
        })
        items.splice(indexToDelete, 1)
        resolve({id: itemId})
      }, 100)
    })
  }
}

export default ItemsApi
