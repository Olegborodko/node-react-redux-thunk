import React, {Component} from 'react';

class HotDog extends Component {

  render() {
    const {title, price, body, image} = this.props;

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
          <li className='button-edit'>Edit</li>
        </ul>
      </div>
    )
  }
}

export default HotDog
