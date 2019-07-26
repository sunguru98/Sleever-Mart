import React from 'react'
import '../styles/CartCheckoutListItem.scss'
import { connect } from 'react-redux'
import { removeItemFromCart, incrementCartItemQuantity, decrementCartItemQuantity } from '../redux/actions/cartActions'

const CartCheckoutListItem = ({ cartItem, removeItemFromCart, incrementCart, decrementCart }) => {
  const handleClick = () => removeItemFromCart(cartItem.id)
  const updateQuantity = event => event.target.dataset.type === 'increment' ? incrementCart(cartItem) : decrementCart(cartItem)
  return (
    <div className='CartCheckOutListItem'>
      <div className='CartCheckOutListItem__image-container'>
        <img alt='cart-item' src={cartItem.imageUrl}/>
      </div>
      <span className='CartCheckOutListItem__name'>{cartItem.name}</span>
      <div className='CartCheckOutListItem__quantity'>
        <span onClick={updateQuantity} data-type='decrement' className='CartChecOutListItem__quantity-arrow CartChecOutListItem__quantity-arrow--larrow' style={{ marginRight: '10px', cursor: 'pointer' }}>&#10094;</span>
        {cartItem.quantity}
        <span onClick={updateQuantity} data-type='increment' className='CartChecOutListItem__quantity-arrow CartChecOutListItem__quantity-arrow--rarrow' style={{ marginLeft: '10px', cursor: 'pointer' }}>&#10095;</span>
      </div>
      <span className='CartCheckOutListItem__price'>{cartItem.price}$</span>
      <div className='CartCheckOutListItem__remove-btn' onClick={handleClick}>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: cartItemId => dispatch(removeItemFromCart(cartItemId)),
  incrementCart: cartItem => dispatch(incrementCartItemQuantity(cartItem)),
  decrementCart: cartItem => cartItem.quantity > 1 ? dispatch(decrementCartItemQuantity(cartItem)) : dispatch(removeItemFromCart(cartItem.id))
})
 
export default connect(null, mapDispatchToProps)(CartCheckoutListItem)