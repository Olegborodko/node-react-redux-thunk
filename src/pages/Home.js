import React, {Component} from 'react'
import HotDog from '../components/HotDog'
import HotDogEdit from '../components/HotDogEdit'
import { connect } from 'react-redux'
import actions from '../actions'

class Home extends Component {
  componentDidMount() {
    this.props.getProducts()
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
            if (state.products.editId === value.id) {
              return <HotDogEdit 
                title={value.title}
                body={value.body}
                price={value.price}
                image={value.imgLink} 
                key={value.id}
                id={value.id}
              />
            } else {
              return <HotDog 
                title={value.title}
                body={value.body}
                price={value.price}
                image={value.imgLink} 
                key={value.id}
                id={value.id}
              />
            }
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
    getProducts: () => {
      dispatch(actions.getProducts())
    }
  })
)(Home)
