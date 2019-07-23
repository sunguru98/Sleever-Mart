// We are basically using reselect only for avoiding unnecessary rerenders,

// 1. Even if the reducer is not responsible for any related action, it will still rerender
// Because every time action is triggered a new state is being stored in reducer
// 2. reselect avoids us to rerender by memoizing (caching) the state value so that, redux knows that no state has
// been changed, hence no rerender

import { createSelector } from 'reselect'
// There are basically two types of selectors
// 1. Input selectors
// 2. Output selectors which use the input and createSelector

// This is the first input selector we are going to start, It returns a piece of state from a large thing
export const selectCart = state => state.cart
// Using the above input selector, we use createSelector which accpets an array of inputSelectors and an
// output selector which returns cartItems
export const selectCartDropDownHidden = createSelector([selectCart], cartState => cartState.cartDropDownHidden)
export const selectCartItems = createSelector([selectCart], cartState => cartState.itemsInCart)
// And using this selectCartItems, we again pass inside createSelector to return the cartItems
export const selectCartItemsCount = createSelector([selectCartItems], cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0))
export const selectCartItemsPrice = createSelector([selectCartItems], cartItems => cartItems.reduce((acc, cartItem) => acc + (cartItem.quantity * cartItem.price), 0))