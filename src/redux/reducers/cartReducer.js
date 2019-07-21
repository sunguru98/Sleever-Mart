import cartActionTypes from '../actionTypes/cartActionTypes'

const cartInitialState = {
  cartDropDownHidden: true
}

const cartReducer = (cartState = cartInitialState, cartAction) => {
  switch (cartAction.type) {
    case cartActionTypes.SHOW_CART_DROPDOWN: return { ...cartState, cartDropDownHidden: cartAction.payload }
    default: return cartState
  }
}

export default cartReducer