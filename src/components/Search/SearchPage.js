import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
// import * as itemActions from '../../actions/itemActionsNoAPI';
import * as itemActions from '../../actions/itemActions'
import Search from './index'

class SearchPage extends React.Component {
  constructor (props, context) {
    super(props, context)
  }

  componentWillMount () {
    this.props.actions.loadItems()
  }

  componentWillReceiveProps (nextProps) {
    console.log('component will receive props', this.props.items, nextProps.items)
    // if(this.props.items !== nextProps.items) {
      // this.props.actions.loadItems();
    // }
  }

  render () {
    console.log(this.props.items)
    const {items} = this.props

    if (items === undefined || items.length < 1) return null

    return (
      <div>
        <Search items={items} />
      </div>
    )
  }
 }

SearchPage.propTypes = {
  // items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state, ownProps) {
  console.log('map state in search page', state)
  return {items: state.items}
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
