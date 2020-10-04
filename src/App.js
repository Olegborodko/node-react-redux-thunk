import React, {Component} from 'react';
import './App.css';
import HotDog from './components/HotDog';

const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum neque mauris, vitae fringilla sem dapibus et. Nulla auctor dolor dui, in sodales enim sodales et.'

const hotDogs = [
  {
    title: 'New York City',
    price: '1$',
    body,
    image: 2
  },
  {
    title: 'Chicago',
    price: '2$',
    body,
    image: 1
  },
  {
    title: 'Atlanta and the South',
    price: '2.5$',
    body,
    image: 3
  },
  {
    title: 'Kansas City',
    price: '1.2$',
    body,
    image: 4
  },
]

class App extends Component {
  render() {
    return (
      <div className='container'> 
        <div className='header'>
          <img src='/img/logo.jpg' alt='Logo' className='logo' />
          <div className='button add-hot-dog'>
            Add hot-dog
          </div>
        </div>
        <div className='body'>
          <div className='body-title'>
            All hot-dogs
          </div>
          <div className='list'>
          {hotDogs.map((value, index) => {
            return <HotDog 
              title={value.title}
              body={value.body}
              price={value.price}
              image={'/img/'+value.image+'.jpg'} 
              key={index}
            />
          })}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
