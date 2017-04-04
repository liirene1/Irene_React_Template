import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Button, Modal } from 'react-materialize'

// import * as itemActions from '../../actions/itemActionsNoAPI';
import * as itemActions from '../../actions/itemActions'
import EditForm from './EditForm'

class ItemListing extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.onDelete = this.onDelete.bind(this)
    this.onText = this.onText.bind(this)
  }

  onDelete (event) {
    console.log('delete button', this.props.item)
    this.props.actions.deleteItem(this.props.item.id)
  }

  onText () {
    console.log('Text this phone number')
    this.props.actions.textNumber(this.props.item)
  }

  render () {
    return (
      <div>
        <h5>{this.props.item.name}</h5>
        <h6>{this.props.item.size}</h6>
        <h6>{this.props.item.phone}</h6>
        <Button onClick={this.onDelete}>Delete</Button>
        <Button onClick={this.onText}>TEXT</Button>
        <Modal
          header='Edit'
          fixedFooter
          trigger={
            <Button>EDIT</Button>
            }>
          <EditForm item={this.props.item} />
        </Modal>
      </div>
    )
  }
}

ItemListing.propTypes = {
  item: PropTypes.object.isRequired
}

function mapStateToProps (state, ownProps) {
  return {
    items: state.items
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListing)
