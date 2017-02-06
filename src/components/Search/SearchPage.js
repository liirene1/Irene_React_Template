import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActionsNoAPI';
import Search from './index';

class SearchPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.loadItems();
  }

  componentWillReceiveProps(nextProps) {
    console.log("component will receive props", this.props.items, nextProps.items);
    //if(this.props.items !== nextProps.items) {
      //this.props.actions.loadItems();
    //}
  }

  render() {
    console.log(this.props.items);
    const {items} = this.props;

    return (
      <div>
        <Search items={items} />
      </div>
    );
   }
 }

SearchPage.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return state.items;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
