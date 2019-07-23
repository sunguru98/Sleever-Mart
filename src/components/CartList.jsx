import React from 'react'
import '../styles/CartList.scss'
import CartListItem from '../components/CartListItem'

const CartList = ({ cartItems }) => {
  return (
    <div className='CartList'>
      { cartItems.map(cartItem => <CartListItem key={cartItem.id} cartItem={cartItem} />) }
    </div>
  );
}


export default (CartList)
