import React, {Component} from 'react'
import '../App.css'
import HotDog from '../components/HotDog'
import { connect } from 'react-redux'
const axios = require('axios');
axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT + '/api'

class Home extends Component {
  componentDidMount() {
    const this_ = this; 
    axios.get(`/products`)
    .then(function (res) {
      this_.props.getProducts(res.data.body)
    })
    .catch(function (error) {
      this_.props.getProducts([])
    })
  }

  render() {
    const { state } = this.props
    return (
        <div className='body'>
          <div className='body-title'>
            All hot-dogs
          </div>
          <div className='list'>
          {state.products.items.map((value, index) => {
            return <HotDog 
              title={value.title}
              body={value.body}
              price={value.price}
              image={value.imgLink} 
              key={index}
            />
          })}
          </div>
        </div>
    )
  }
}

export default connect(
  state => ({
    state
  }),
  dispatch => ({
    getProducts: (data) => {
      dispatch({ type: 'PRODUCTS_CHANGE', payload: data });
    }
  })
)(Home);
