import React from 'react'
import { reduxForm } from 'redux-form'
// import * as itemActions from '../../actions/itemActionsNoAPI';
import * as itemActions from '../../actions/itemActions'

class ItemForm extends React.Component {
  handleFormSubmit (formProps) {
    console.log('handleFormSubmit', formProps)
    this.props.addItem(formProps)
  }

  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong> Oops! </strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render () {
    const { handleSubmit, fields: { name, size, phone } } = this.props

    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className='form-group'>
            <label htmlFor='name'>Name</label>
            <input {...name} type='text' className='form-control' id='name' />
            {name.touched && name.error && <div className='error'>{name.error}</div>}
          </fieldset>
          <fieldset className='form-group'>
            <label htmlFor='size'>Party Size</label>
            <input {...size} type='number' min='1' max='20' className='form-control' id='size' />
            {size.touched && size.error && <div className='error'>{size.error}</div>}
          </fieldset>
          <fieldset className='form-group'>
            <label htmlFor='phone'>Phone Number</label>
            <input {...phone} type='tel' className='form-control' id='phone' />
            {phone.touched && phone.error && <div className='error'>{phone.error}</div>}
          </fieldset>
          {this.renderAlert()}
          <button action='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    )
  }
}

function validate (formProps) {
  const errors = {}

  if (!formProps.name) {
    errors.name = 'Please enter your name'
  }

  if (!formProps.size) {
    errors.size = 'Please enter your party size'
  }

  var phoneno = /^\d{10}$/
  if (!formProps.phone || !formProps.phone.match(phoneno)) {
    errors.phone = 'Please enter a valid phone number'
  }

  return errors
}

function mapStateToProps (state) {
  console.log(state)
  // return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'add',
  fields: ['name', 'size', 'phone'],
  validate
}, mapStateToProps, itemActions)(ItemForm)
