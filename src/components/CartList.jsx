import React from 'react'
import '../styles/CartList.scss'
import CartListItem from '../components/CartListItem'
import { connect } from 'react-redux'
import { selectCartItems } from '../redux/selectors/cartSelectors'

const CartList = ({ cartItems }) => {
  return (
    <div className='CartList'>
      { cartItems.map(cartItem => <CartListItem key={cartItem.id} cartItem={cartItem} />) }
    </div>
  );
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartList)
