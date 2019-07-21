import cartActionTypes from '../actionTypes/cartActionTypes'

export const showCartDropdown = displayStatus => ({
  type: cartActionTypes.SHOW_CART_DROPDOWN,
  payload: displayStatus
})

export const addItemToCart = itemObj => ({
  type: cartActionTypes.ADD_ITEM_TO_CART,
  payload: itemObj
})