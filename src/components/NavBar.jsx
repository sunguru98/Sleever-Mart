import React from 'react'
import CartIcon from '../components/CartIcon'
import CartDropDown from '../components/CartDropDown'
import '../styles/NavBar.scss'
import { ReactComponent as CrownLogo } from '../assets/crown.svg'
// React router
import { Link } from 'react-router-dom'
// Firebase auth
import { auth } from '../firebase.config'

// Redux specific methods
import { connect } from 'react-redux'

// A standard way of receiving props is via the parent component
// But in redux, we acheive using a higher order component called connect,
// And a helper function called mapStateToProps.
// This mapStateToProps accepts a state object, that object is none other than the root reducer
// And root reducer is made visible to components via the Provider component attached in the index.js
// By this helper method, We can now access the reducer and passIn props directly, hence the name mapStateToProps

const NavBar = ({ user }) => {
  return (
    <div className='NavBar'>
      <Link to='/' className='NavBar__logo-container'>
        <CrownLogo className='NavBar__logo' />
      </Link>
      <div className='NavBar__links'>
        <Link to='/shop' className='NavBar__shop'>SHOP</Link>
        <Link to='/contact' className='NavBar__contact'>CONTACT</Link>

        { !user ? 
          <Link to='/auth' className='NavBar__auth'>SIGN IN</Link> : 
          <div onClick={() => auth.signOut()} to='/auth' className='NavBar__auth'>SIGN OUT</div>
        }
        <CartIcon />
      </div>
      <CartDropDown />
    </div>
  )
}

// This function ensures the component what props should have what state.
// By returning an object, of the property name and value corresponding to the props and the specificReducer state respectively
const mapStateToProps = rootReducerStateObj => ({
  user: rootReducerStateObj.user.user // First from rootReducer then to userReducer and then it accesses the user state
})

// connect is a Higher order component, which takes in two arguments
// mapStateToProps and mapDispatchToProps
// mapStateToProps takes in the rootReducer state and helps the components receive via a prop
// mapDispatchToProps takes in the dispatch as an argument and helps the components receive as a prop,
// So whenever dispatch is called, it triggers that particular action
export default connect(mapStateToProps)(NavBar)