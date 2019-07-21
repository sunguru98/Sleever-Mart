import cartActionTypes from '../actionTypes/cartActionTypes'
import { addItemToCartHelper } from '../utils/cartUtils'

const cartInitialState = {
  cartDropDownHidden: true,
  itemsInCart: []
}

const cartReducer = (cartState = cartInitialState, cartAction) => {
  switch (cartAction.type) {
    case cartActionTypes.SHOW_CART_DROPDOWN: return { ...cartState, cartDropDownHidden: cartAction.payload }
    case cartActionTypes.ADD_ITEM_TO_CART: return { ...cartState, itemsInCart: addItemToCartHelper(cartState.itemsInCart, cartAction.payload) }
    default: return cartState
  }
}

export default cartReducer