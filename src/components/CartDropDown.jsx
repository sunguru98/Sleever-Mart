import React from 'react'
import CartList from './CartList'
import CustomButton from './CustomButton'
import '../styles/CartDropDown.scss'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectCartItems } from '../redux/selectors/cartSelectors'
import { createStructuredSelector } from 'reselect'
import { showCartDropdown } from '../redux/actions/cartActions'

const CartDropDown = ({ cartItems, history, dispatch }) => {
  const handleClick = () => { history.push('/checkout'); dispatch(showCartDropdown(true)) }
  return (
    <div className='CartDropDown'>
      { cartItems.length ? <CartList cartItems={cartItems} /> : <span className='CartDropDown__message'>Your cart is empty</span> }
      <CustomButton onClick={handleClick}>Go to Checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})
 
export default withRouter(connect(mapStateToProps)(CartDropDown))