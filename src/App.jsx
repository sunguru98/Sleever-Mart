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
// Redux
import { connect } from 'react-redux'
import { setUser } from './redux/actions/userActions'
// React Router 
import { Switch, Route } from 'react-router-dom'
class App extends Component {
  // For closing the auth subscription when app is unmounted
  unsubscribeAuth = null

  componentWillMount () {
    const { setUser } = this.props
    // Firebase constantly looks for the user whether signed in or not
    this.unsubscribeAuth = auth.onAuthStateChanged(async user => {
      console.log(user)
      // If the user is signed in (meaning its not null)
      if (user) {
        // We try to create that user (in a form of document) in the database (users collection), If its present means we skip it
        const userDocumentReference = await createUserProfileDocument(user)
        // We see a real time snapshot data checker using onSnapshot
        userDocumentReference.onSnapshot(snapshot => {
          // Redux action setUser, instead of this.setState({})
          setUser({ id: snapshot.id, ...snapshot.data() })
        })
      } else setUser(null)
    })
  }

  componentWillUnmount () {
    this.unsubscribeAuth()
  }

  render () {
    return (
      <div className="App">
        <NavBar />
        <Switch>
         <Route exact path='/' component={HomePage} />
         <Route exact path='/shop' component={ShopPage} />
         <Route exact path='/auth' component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

// As said earlier (refer in Navbar component) connect takes two args.
// Since we dont need any state as a prop here (no component is using here any state)
// We only need an action that is to be triggered once a new user signs in or registers
// For that we use mapDispatchToState method. It receives a dispatch parameter 
// (dispatch means an order given to release an action to the reducer)
// That dispatch method gets as a prop here.

const mapDispatchToState = dispatch => ({
  // Note that the setUser prop is different from the setUser function which is passed as param in dispatch
  // The first is just a prop name, where as the second is the actual user Action
  setUser: userObj => dispatch(setUser(userObj))
})

// Remember these all will work only if the Provider component is surrounded in 'index.js'
export default connect(null, mapDispatchToState)(App);
