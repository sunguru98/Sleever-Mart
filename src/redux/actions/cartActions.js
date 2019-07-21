import cartActionTypes from '../actionTypes/cartActionTypes'

export const showCartDropdown = displayStatus => ({
  type: cartActionTypes.SHOW_CART_DROPDOWN,
  payload: displayStatus
})