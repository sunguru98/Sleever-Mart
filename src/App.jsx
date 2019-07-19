import React, { Component } from 'react'
import './styles/App.scss'
// Navbar component
import NavBar from './components/NavBar'
// All pages
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import AuthPage from './pages/AuthPage'
// Firebase auth component
import { auth } from './firebase.config'

import { Switch, Route } from 'react-router-dom'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = { user: null }
  }

  // For closing the auth subscription when app is unmounted
  unsubscribeAuth = null

  componentWillMount () {
    // Firebase constantly looks for the user whether signed in or not
    this.unsubscribeAuth = auth.onAuthStateChanged(snapShot => {
      this.setState({ user: snapShot })
      console.log(snapShot)
    })
  }

  componentWillUnmount () {
    this.unsubscribeAuth()
  }

  render () {
    return (
      <div className="App">
        <NavBar currentUser={this.state.user} />
        <Switch>
         <Route exact path='/' component={HomePage} />
         <Route exact path='/shop' component={ShopPage} />
         <Route exact path='/auth' component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
