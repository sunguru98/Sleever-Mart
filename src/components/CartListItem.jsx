import React from 'react'
import '../styles/CartListItem.scss'
const CarListItem = ({ cartItem }) => {
  return (
    <div className='CartListItem'>
      <img src={cartItem.imageUrl} alt='cart-item' className='CartListItem__image'/>
      <div className='CartListItem__details'>
        <span className='CartListItem__details--name'>{cartItem.name}</span>
        <span className='CartListItem__details--price'>{cartItem.quantity} X {cartItem.price}$</span>
      </div>
    </div>
  )
}
 
export default CarListItem