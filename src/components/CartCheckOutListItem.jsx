import React from 'react'
import '../styles/CartCheckoutListItem.scss'
const CartCheckoutListItem = ({ cartItem }) => {
  return (
    <div className='CartCheckOutListItem'>
      <div className='CartCheckOutListItem__image-container'>
        <img alt='cart-item' src={cartItem.imageUrl}/>
      </div>
      <span className='CartCheckOutListItem__name'>{cartItem.name}</span>
      <span className='CartCheckOutListItem__quantity'>{cartItem.quantity}</span>
      <span className='CartCheckOutListItem__price'>{cartItem.price}$</span>
      <span className='CartCheckOutListItem__remove-btn'>&#10005;</span>
    </div>
  )
}
 
export default CartCheckoutListItem