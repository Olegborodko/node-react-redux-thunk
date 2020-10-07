import React, {Component} from 'react';
import './App.css';
import HotDog from './components/HotDog';

class App extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    
  }

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
          {/* {hotDogs.map((value, index) => {
            return <HotDog 
              title={value.title}
              body={value.body}
              price={value.price}
              image={'/img/'+value.image+'.jpg'} 
              key={index}
            />
          })} */}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
