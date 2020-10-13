import React, {Component} from 'react'
import '../App.css'
import HotDog from '../components/HotDog'
const axios = require('axios');
axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT + '/api'

class Home extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    const this_ = this; 
    axios.get(`/products`)
    .then(function (res) {
      this_.setState({
        items: res.data.body
      })
    })
    .catch(function (error) {
      this_.setState({
        items: []
      })
    })
  }

  render() {
    const { items } = this.state
    console.log(items)
    return (
        <div className='body'>
          <div className='body-title'>
            All hot-dogs
          </div>
          <div className='list'>
          {items.map((value, index) => {
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

export default Home