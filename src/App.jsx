import React, { Component } from 'react'
import './styles/App.scss'
// Navbar component
import NavBar from './components/NavBar'
// All pages
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import AuthPage from './pages/AuthPage'
import CheckoutPage from './pages/CheckoutPage'
import CategoryPage from './pages/CategoryPage'

// Redux
import { connect } from 'react-redux'
import { setUser, getCurrentUser } from './redux/actions/userActions'
import { createStructuredSelector } from 'reselect'
import { selectUsersUser } from './redux/selectors/userSelectors'
// React Router 
import { Switch, Route, Redirect } from 'react-router-dom'
class App extends Component {
  componentDidMount () {
    this.props.getCurrentUser()
  }

  render () {
    return (
      <div className="App">
        <NavBar />
        <Switch>
         <Route exact path='/' component={HomePage} />
         <Route exact path='/shop' component={ShopPage} />
         <Route exact path='/shop/:categoryId' component={CategoryPage} />
         <Route exact path='/auth' render={() => this.props.user ? <Redirect to='/' /> : <AuthPage /> }/>
         <Route exact path='/checkout' component={CheckoutPage}  />
        </Switch>
      </div>
    );
  }
}

// As said earlier (refer in Navbar component) connect takes two args.
// mapPropsToState assigns a part of state to a prop.
// But we need an action that is to be triggered once a new user signs in or register's
// For that we use mapDispatchToProps method. It receives a dispatch parameter 
// (dispatch means an order given to release an action to the reducer)
// That dispatch method gets as a prop here.

const mapStateToProps = createStructuredSelector({
  user: selectUsersUser
})

const mapDispatchToProps = dispatch => ({
  // Note that the setUser prop is different from the setUser function which is passed as param in dispatch
  // The first is just a prop name, where as the second is the actual user Action
  setUser: userObj => dispatch(setUser(userObj)),
  getCurrentUser: () => dispatch(getCurrentUser())
})

// Remember these all will work only if the Provider component is surrounded in 'index.js'
export default connect(mapStateToProps, mapDispatchToProps)(App);
