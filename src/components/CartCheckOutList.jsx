import React from 'react'
import { connect } from 'react-redux'
import CartCheckOutListItem from './CartCheckOutListItem'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../redux/selectors/cartSelectors'

const CartCheckOutList = ({ cartItems }) => {
  return (
    <div className='CartCheckoutList' style={{ width: '100%' }}>
      { cartItems.map(cartItem => <CartCheckOutListItem key={ cartItem.id } cartItem={ cartItem } />) }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})
export default connect(mapStateToProps)(CartCheckOutList)