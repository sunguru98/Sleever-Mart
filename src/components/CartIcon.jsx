import React from 'react'
import '../styles/CartIcon.scss'
import { ReactComponent as ShoppingBag } from '../assets/shopping-bag.svg'
import { connect } from 'react-redux'

const CartIcon = ({ onClick, cartItems }) => {
  return (
    <div className='CartIcon' onClick={onClick}>
      <ShoppingBag className='CartIcon__ShoppingBag' />
      <span className='CartIcon__count'>{ cartItems.length }</span>
    </div>
  )
}

const mapStateToProps = ({ cart: { itemsInCart } }) => ({
  cartItems: itemsInCart
})
 
export default connect(mapStateToProps)(CartIcon)