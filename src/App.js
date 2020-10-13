import React, {Component} from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Error404 from './pages/Error404'
import { 
  Route, BrowserRouter as Router, Switch 
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'> 
          <Header/>
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/profile' component={Profile} />
            <Route path='/' exact component={Home} />
            <Route component={Error404} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
