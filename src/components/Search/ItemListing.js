import React, {PropTypes} from 'react';

const ItemListing = ({item}) => {
  return (
    <div>
        <h3>{item.name}</h3>
        <h5>{item.color}</h5>
    </div>
  );
};

ItemListing.propTypes = {
  item: PropTypes.object.isRequired
};

export default ItemListing;
