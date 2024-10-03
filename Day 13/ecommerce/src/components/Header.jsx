import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          <Link to={"/"}>LOGO</Link>
        </h1>
        <nav>
          <ul className="flex space-x-6 text-lg font-bold">
            <li>
              <Link to="/products" className="text-gray-600 hover:text-blue-500 transition-colors">Products</Link>
            </li>
            <li>
              <Link to="/blogs" className="text-gray-600 hover:text-blue-500 transition-colors">Blogs</Link>
            </li>
            <li>
              <Link to="/cart" className="text-gray-600 hover:text-blue-500 transition-colors">Cart ( {cartItems.length} )</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-blue-500 transition-colors">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
