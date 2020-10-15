import React, {Component} from 'react';
import { connect } from 'react-redux'

class HotDogEdit extends Component {

  deleteClick(id) {
    
  }

  updateClick(id) {

  }

  render() {
    const {title, price, body, image, id} = this.props

    return (
    	<div className='one-hot-dog one-hot-dog-edit'>
        <ul>
          <li>
            <img 
              src={image} 
              alt='img' 
            />
          </li>
          <li className='img'>
            <select defaultValue="value2">
            <option value="value1">Значение 1</option> 
            <option value="value2">Значение 2</option>
            <option value="value3">Значение 3</option>
            </select>
          </li>
          <li className='title'>
            <input 
              defaultValue={title} 
              type='text'
              ref={this.inputTitle}
            />
          </li>
          <li className='price'>
            <input 
              defaultValue={price} 
              type='text'
              ref={this.inputPrice}
            />
          </li>
          <li className='body'>
            <textarea
              defaultValue={body} 
              ref={this.inputBody}
            />
          </li>
          <li 
            className='button-edit' 
            onClick={() => this.updateClick(id)}>
              Update
          </li>
          <li 
            className='button-edit' 
            onClick={() => this.deleteClick(id)}>
              Delete
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    state
  }),
  dispatch => ({
    setEditId: (id) => {
      dispatch({
        type: 'PRODUCT_EDIT',
        payload: id
      })
    }
  })
)(HotDogEdit)

