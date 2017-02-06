import React, { Component } from 'react';
import ItemForm from './Search/ItemForm';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Add Items</h1>
        <ItemForm />
      </div>
    );
  }
};

export default Main;
