import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, updateCart, deleteFromCart, calculateTotalCostPerItem } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cartItems
              .filter(item => item.quantity > 0)
              .map((item) => (
                <div key={item.id} className="border p-4 rounded-lg shadow-lg bg-white flex">
                  <img
                    loading='lazy'
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="ml-4 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                      <p className="text-gray-600 mt-2">{item.description.substring(0, 100)}...</p>
                    </div>
                    <div className="flex items-center justify-between mt-4 pr-4">
                      <span className="text-lg font-bold">${calculateTotalCostPerItem(item)}</span>
                      <div className="flex items-center space-x-4 font-bold">
                        <button
                          className="bg-gray-200 text-black rounded px-4 py-2 hover:bg-gray-300"
                          onClick={() => updateCart(item, 'decrement')}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="bg-gray-200 text-black rounded px-4 py-2 hover:bg-gray-300"
                          onClick={() => updateCart(item, 'increment')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="ml-auto bg-red-500 text-white rounded px-4 py-2 font-bold hover:bg-red-600"
                    onClick={() => deleteFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              ))}
          </div>

          <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">Cart Summary</h2>
            <div className="mt-4">
              <p className="text-lg">Total Price: <span className="font-bold">${calculateTotal()}</span></p>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="text-xl">Your cart is empty!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
