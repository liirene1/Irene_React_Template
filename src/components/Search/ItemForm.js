import React, {PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import * as itemActions from '../../actions/itemActions';

class ItemForm extends React.Component {
  handleFormSubmit(formProps) {
    console.log("handleFormSubmit", formProps);
    this.props.addItem(formProps);
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
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
            <input {...name} type="text" className="form-control" id="name" />
            {name.touched && name.error && <div className="error">{name.error}</div>}
          </fieldset>
          <fieldset className="form-group">
            <label for="color">Color</label>
            <input {...color} type="text" className="form-control" id="color" />
            {color.touched && color.error && <div className="error">{color.error}</div>}
          </fieldset>
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  //redux form will validate anytime the form changes
  if (!formProps.name) {
    errors.name = 'Please enter the name';
  }

  if (!formProps.color) {
    errors.color = 'Please enter the color';
  }

  return errors;
}

function mapStateToProps(state) {
  console.log(state);
  //return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'add',
  fields: ['name', 'color'],
  validate
}, mapStateToProps, itemActions)(ItemForm);
