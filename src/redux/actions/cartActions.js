import cartActionTypes from '../actionTypes/cartActionTypes'

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART
})

export const showCartDropdown = displayStatus => ({
  type: cartActionTypes.SHOW_CART_DROPDOWN,
  payload: displayStatus
})

export const addItemToCart = itemObj => ({
  type: cartActionTypes.ADD_ITEM_TO_CART,
  payload: itemObj
})

export const removeItemFromCart = itemObjId => ({
  type: cartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: itemObjId
})

export const incrementCartItemQuantity = itemObj => ({
  type: cartActionTypes.INCREMENT_QUANTITY,
  payload: itemObj
})

export const decrementCartItemQuantity = itemObj => ({
  type: cartActionTypes.DECREMENT_QUANTITY,
  payload: itemObj
})

