export const getTotalCartItemsCount = (cartItems) => {
  return cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
} 