export const addItemToCartHelper = (cartItems, itemObj) => {
  const existingItem = cartItems.find(item => item.id === itemObj.id)
  if (existingItem) return cartItems.map(cartItem => cartItem.id === itemObj.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
  return [ ...cartItems, {...itemObj, quantity: 1} ]
}