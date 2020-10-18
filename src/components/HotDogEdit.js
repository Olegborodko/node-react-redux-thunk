import React, {Component} from 'react';
import { connect } from 'react-redux'
import actions from '../actions'
const { 
  positiveNumber,
  lengthFromTo
} = require('../libs/fieldsValidation')

class HotDogEdit extends Component {
  state = {
    errors: {},
    imageState: ''
  };

  deleteClick() {
    
  }

  updateClick() {
    const imgLink = this.refSelectImage.value
    const title = this.refInputTitle.value
    const price = +this.refInputPrice.value
    const body = this.refInputBody.value

    const errors = {...this.state.errors}

    if (positiveNumber(price)) {
      errors.price = false
    } else {
      errors.price = true
    }

    if (lengthFromTo(title, 1)){
      errors.title = false
    } else {
      errors.title = true
    }

    if (lengthFromTo(body, 1)){
      errors.body = false
    } else {
      errors.body = true
    }

    if (
      errors.title ||
      errors.body || 
      errors.price 
      ) {
        this.setState({
          errors
        })
        return
    }

    this.props.saveProduct(this.props.id, {
      title,
      price,
      body,
      imgLink
    })

    this.props.setEditId(-1)
  }

  selectChange() {
    const selectImage = this.refSelectImage.value
    this.setState({
      imageState: selectImage
    })
  }

  render() {
    const {title, price, body, image} = this.props
    const {errors, imageState} = this.state

    return (
    	<div className='one-hot-dog one-hot-dog-edit'>
        <ul>
          <li>
            <img 
              src={imageState ? imageState : image} 
              alt='img' 
            />
          </li>
          <li className='img'>
            <select 
              defaultValue={image}
              ref={(c) => this.refSelectImage = c}
              onChange = {() => this.selectChange()}
            >
              <option value='/img/hotDogs/1.jpg'>
                /img/hotDogs/1.jpg
              </option> 
              <option value='/img/hotDogs/2.jpg'>
                /img/hotDogs/2.jpg
              </option>
              <option value='/img/hotDogs/3.jpg'>
                /img/hotDogs/3.jpg
              </option>
              <option value='/img/hotDogs/4.jpg'>
                /img/hotDogs/4.jpg
              </option>
            </select>
          </li>
          <li className='title'>
            <input 
              className={errors.title ? 'error' : ''}
              defaultValue={title} 
              type='text'
              ref={(c) => this.refInputTitle = c}
            />
          </li>
          <li className='price'>
            <input 
              className={errors.price ? 'error' : ''}
              defaultValue={price} 
              type='text'
              ref={(c) => this.refInputPrice = c}
            />
          </li>
          <li className='body'>
            <textarea
              className={errors.body ? 'error' : ''}
              defaultValue={body} 
              ref={(c) => this.refInputBody = c}
            />
          </li>
          <li 
            className='button-edit' 
            onClick={() => this.updateClick()}>
              Update
          </li>
          <li 
            className='button-edit' 
            onClick={() => this.deleteClick()}>
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
    saveProduct: (id, obj) => {
      dispatch(actions.saveProduct(id, obj))
    },
    setEditId: (id) => {
      dispatch({
        type: 'PRODUCT_EDIT',
        payload: id
      })
    },
    getProducts: () => {
      dispatch(actions.getProducts())
    }
  })
)(HotDogEdit)
