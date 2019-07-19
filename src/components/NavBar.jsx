import React from 'react'
import '../styles/NavBar.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../assets/crown.svg'
import { auth } from '../firebase.config'

const NavBar = ({ currentUser }) => {
  return (
    <div className='NavBar'>
      <Link to='/' className='NavBar__logo-container'>
        <CrownLogo className='NavBar__logo' />
      </Link>
      <div className='NavBar__links'>
        <Link to='/shop' className='NavBar__shop'>SHOP</Link>
        <Link to='/contact' className='NavBar__contact'>CONTACT</Link>

        { !currentUser ? 
          <Link to='/auth' className='NavBar__auth'>SIGN IN</Link> : 
          <div onClick={() => auth.signOut()} to='/auth' className='NavBar__auth'>SIGN OUT</div>
        }
        <span className='NavBar__shoppingcart'>
          <img src='' alt='shoppingcart'/>
        </span>
      </div>
    </div>
  )
}

export default NavBar