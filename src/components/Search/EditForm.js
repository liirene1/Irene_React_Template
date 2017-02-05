import React, {PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import * as itemActions from '../../actions/itemActions';

class EditForm extends React.Component {
  handleFormSubmit(formProps) {
    console.log("handleFormSubmit", formProps, this.props.item);

    //if user wants pre-populated values
    if (!formProps.name) {
      formProps.name = this.props.item.name;
    }

    if (!formProps.color) {
      formProps.color = this.props.item.color;
    }

    const itemToEdit = Object.assign({}, formProps, {id: this.props.item.id})
    console.log(itemToEdit);
    this.props.editItem(itemToEdit);
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <br />
          <strong> Oops! </strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { name, color }} = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <label for="name">Name</label>
            <input {...name} type="text" className="form-control" id="name" placeholder={this.props.item.name}/>
          </fieldset>
          <fieldset className="form-group">
            <label for="color">Color</label>
            <input {...color} type="text" className="form-control" id="color" placeholder={this.props.item.color}/>
          </fieldset>
          {this.renderAlert()}
          <br />
          <button action="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  //return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'edit',
  fields: ['name', 'color']
}, mapStateToProps, itemActions)(EditForm);
