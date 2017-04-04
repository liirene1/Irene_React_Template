import React, { PropTypes } from 'react'
import ItemListing from './ItemListing'

const Search = ({items}) => {
  return (
    <div>
      <h2>Waitlist</h2>
      {items.map(item =>
        <ItemListing key={item.id} item={item} />
        )}
    </div>
  )
}

Search.propTypes = {
  items: PropTypes.array.isRequired
}

export default Search
