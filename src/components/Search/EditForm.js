import React, {PropTypes} from 'react'
import { reduxForm } from 'redux-form'
import * as itemActions from '../../actions/itemActions'

class EditForm extends React.Component {
  handleFormSubmit (formProps) {
    console.log('handleFormSubmit', formProps, this.props.item)

    // if user wants pre-populated values
    if (!formProps.name) {
      formProps.name = this.props.item.name
    }

    if (!formProps.size) {
      formProps.size = this.props.item.size
    }

    if (!formProps.phone) {
      formProps.phone = this.props.item.phone
    }

    const itemToEdit = Object.assign({}, formProps, {id: this.props.item.id})
    console.log(itemToEdit)
    this.props.editItem(itemToEdit)
  }

  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <br />
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
            <label for='name'>Name</label>
            <input {...name} type='text' className='form-control' id='name' placeholder={this.props.item.name} />
          </fieldset>
          <fieldset className='form-group'>
            <label for='size'>Size of Party</label>
            <input {...size} type='text' className='form-control' id='size' placeholder={this.props.item.size} />
          </fieldset>
          <fieldset className='form-group'>
            <label for='phone'>Phone Number</label>
            <input {...phone} type='text' className='form-control' id='phone' placeholder={this.props.item.phone} />
          </fieldset>
          {this.renderAlert()}
          <br />
          <button action='submit' className='btn btn-primary'>Update</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log(state)
  // return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'edit',
  fields: ['name', 'size', 'phone']
}, mapStateToProps, itemActions)(EditForm)
