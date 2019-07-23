import React from 'react'
import '../styles/CartIcon.scss'
import { ReactComponent as ShoppingBag } from '../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { selectCartItemsCount } from '../redux/selectors/cartSelectors'
import { createStructuredSelector } from 'reselect'

const CartIcon = ({ onClick, cartItems }) => {
  return (
    <div className='CartIcon' onClick={onClick}>
      <ShoppingBag className='CartIcon__ShoppingBag' />
      <span className='CartIcon__count'>{ cartItems }</span>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItemsCount
})
 
export default connect(mapStateToProps)(CartIcon)