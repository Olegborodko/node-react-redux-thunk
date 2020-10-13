import React, {Component} from 'react'
import { 
  Link
} from 'react-router-dom'
import '../App.css'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link to='/'>
          <img src='/img/logo.jpg' alt='Logo' className='logo' />
        </Link>
        <Link to='/profile' className='menu'>
          Profile
        </Link>
        <Link to='/about' className='menu'>
          About
        </Link>
        <div className='button add-hot-dog'>
          Add hot-dog
        </div>
      </div>
    )
  }
}

export default Header
