import cartActionTypes from '../actionTypes/cartActionTypes'
import {
  addItemToCartHelper,
  removeItemFromCartHelper,
  incrementItemQuantityHelper,
  decrementItemQuantityHelper
} from '../utils/cartUtils'

const cartInitialState = {
  cartDropDownHidden: true,
  itemsInCart: []
}

const cartReducer = (cartState = cartInitialState, cartAction) => {
  switch (cartAction.type) {
    case cartActionTypes.CLEAR_CART:
      return { ...cartState, itemsInCart: [] }
    case cartActionTypes.SHOW_CART_DROPDOWN:
      return { ...cartState, cartDropDownHidden: cartAction.payload }
    case cartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...cartState,
        itemsInCart: addItemToCartHelper(
          cartState.itemsInCart,
          cartAction.payload
        )
      }
    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...cartState,
        itemsInCart: removeItemFromCartHelper(
          cartState.itemsInCart,
          cartAction.payload
        )
      }
    case cartActionTypes.INCREMENT_QUANTITY:
      return {
        ...cartState,
        itemsInCart: incrementItemQuantityHelper(
          cartState.itemsInCart,
          cartAction.payload
        )
      }
    case cartActionTypes.DECREMENT_QUANTITY:
      return {
        ...cartState,
        itemsInCart: decrementItemQuantityHelper(
          cartState.itemsInCart,
          cartAction.payload
        )
      }
    default:
      return cartState
  }
}

export default cartReducer
