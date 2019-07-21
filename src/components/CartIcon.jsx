import React from 'react'
import '../styles/CartIcon.scss'
import { ReactComponent as ShoppingBag } from '../assets/shopping-bag.svg'

const CartIcon = (props) => {
  return (
    <div className='CartIcon' onClick={props.onClick}>
      <ShoppingBag className='CartIcon__ShoppingBag' />
      <span className='CartIcon__count'>0</span>
    </div>
  )
}
 
export default CartIcon