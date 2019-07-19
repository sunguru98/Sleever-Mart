import React from 'react'
import '../styles/NavBar.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../assets/crown.svg'

const NavBar = props => {
  return (
    <div className='NavBar'>
      <Link to='/' className='NavBar__logo-container'>
        <CrownLogo className='NavBar__logo' />
      </Link>
      <div className='NavBar__links'>
        <Link to='/shop' className='NavBar__shop'>SHOP</Link>
        <Link to='/contact' className='NavBar__contact'>CONTACT</Link>
        <Link to='/auth' className='NavBar__auth'>SIGN IN</Link>
        <span className='NavBar__shoppingcart'>
          <img src='' alt='shoppingcart'/>
        </span>
      </div>
    </div>
  )
}

export default NavBar