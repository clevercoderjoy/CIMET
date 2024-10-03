import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const doesItemExist = cartItems.find((item) => item.id === product.id);
    if (doesItemExist) {
      updateCart(product, "increment");
    }
    else {
      setCartItems(cartItems => [...cartItems, { ...product, quantity: 1 }])
    }
  }

  const updateCart = (product, updateType) => {
    if (updateType === "increment") {
      setCartItems(cartItems => cartItems.map((cartItem) => cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
    }
    if (updateType === "decrement") {
      setCartItems(cartItems => cartItems.map((cartItem) => cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity !== 0 ? cartItem.quantity - 1 : deleteFromCart(product) } : cartItem));
    }
  }

  const deleteFromCart = (product) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== product.id));
  }

  const calculateTotalCostPerItem = (product) => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);
    return (cartItem.price * cartItem.quantity).toFixed(2);
  }

  return (
    <>
      <CartContext.Provider value={{ cartItems, addToCart, updateCart, deleteFromCart, calculateTotalCostPerItem }}>
        {children}
      </CartContext.Provider>
    </>
  )
}