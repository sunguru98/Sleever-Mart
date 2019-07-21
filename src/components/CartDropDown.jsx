import React from 'react'
import CustomButton from './CustomButton'
import '../styles/CartDropDown.scss'

const CartDropDown = props => {
  return (
    <div className='CartDropDown'>
      <div className='CartDropDown__cartitems'>
      </div>
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  )
}
 
export default CartDropDown