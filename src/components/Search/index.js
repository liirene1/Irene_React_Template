import React from 'react';
import ItemListing from './ItemListing';

const Search = ({items}) => {
    return (
      <div>
        Items
        {items.map(item =>
          <ItemListing key={item.id} item={item} />
        )}
      </div>
    )
};

export default Search;
