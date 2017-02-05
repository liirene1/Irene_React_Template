import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Button, Icon, Modal } from 'react-materialize';

import * as itemActions from '../../actions/itemActions';
import {loadItems} from '../../actions/itemActions';
import EditForm from './EditForm';

class ItemListing extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(event) {
    console.log("delete button", this.props.item.id);
    this.props.actions.deleteItem(this.props.item.id);
  }

  render() {
    return (
      <div>
        <h5>{this.props.item.name}</h5>
        <h6>{this.props.item.color}</h6>
        <Button onClick={this.onDelete}><Icon left>delete</Icon>Delete</Button>
          <Modal
            header='Edit'
            fixedFooter
            trigger={
              <Button><Icon left>edit</Icon>EDIT</Button>
            }>
            <EditForm item={this.props.item}/>
          </Modal>
      </div>
    );
  }
};

ItemListing.propTypes = {
  item: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListing);
