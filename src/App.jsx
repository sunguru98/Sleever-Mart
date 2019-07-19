import React, { Component } from 'react'
import './styles/App.scss'
// Navbar component
import NavBar from './components/NavBar'
// All pages
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import AuthPage from './pages/AuthPage'
// Firebase auth component
import { auth, createUserProfileDocument } from './firebase.config'

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
    this.unsubscribeAuth = auth.onAuthStateChanged(async user => {
      // If the user is signed in (meaning its not null)
      if (user) {
        // We try to create that user in the database, If its present means we skip it
        const userDocumentReference = await createUserProfileDocument(user)
        // We see a real time snapshot data checker using onSnapshot
        userDocumentReference.onSnapshot(snapshot => {
          this.setState({user: { id: snapshot.id, ...snapshot.data()}})
        })
      } else this.setState({ user: null })
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
