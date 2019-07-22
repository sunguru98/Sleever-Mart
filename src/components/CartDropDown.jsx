import React from 'react'
import CartList from './CartList'
import CustomButton from './CustomButton'
import '../styles/CartDropDown.scss'

const CartDropDown = (props) => {
  return (
    <div className='CartDropDown'>
      <CartList />
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  )
}
 
export default CartDropDown