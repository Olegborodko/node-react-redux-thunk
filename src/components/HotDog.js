import React, {Component} from 'react'
import { connect } from 'react-redux'

class HotDog extends Component {

  editClick(id) {
    this.props.setEditId(id)
  }

  render() {
    const {title, price, body, image, id} = this.props;

    return (
    	<div className='one-hot-dog'>
        <ul>
          <li>
            <img 
              src={image} 
              alt="img" 
            />
          </li>
          <li className='title'>{title}</li>
          <li className='price'>{price}</li>
          <li className='body'>{body}</li>
          <li 
            className='button-edit' 
            onClick={() => this.editClick(id)}>
              Edit
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
)(HotDog)

