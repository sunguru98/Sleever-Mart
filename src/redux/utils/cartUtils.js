export const addItemToCartHelper = (cartItems, itemObj) => {
  const existingItem = cartItems.find(item => item.id === itemObj.id)
  if (existingItem) return cartItems.map(cartItem => cartItem.id === itemObj.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
  return [ ...cartItems, {...itemObj, quantity: 1} ]
}

export const removeItemFromCartHelper = (cartItems, cartItemId) => cartItems.filter(cartItem => cartItem.id !== cartItemId)

export const incrementItemQuantityHelper = (cartItems, cartItem) => cartItems.map(cartIt => {
  if (cartIt.id === cartItem.id) cartIt = { ...cartIt, quantity: cartIt.quantity + 1 }
  return cartIt
})

export const decrementItemQuantityHelper = (cartItems, cartItem) => cartItems.map(cartIt => {
  if (cartIt.id === cartItem.id) cartIt = { ...cartIt, quantity: cartIt.quantity - 1 }
  return cartIt
})
