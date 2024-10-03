import { Link } from "react-router-dom";
import { showElipses } from "../utils/showElipses";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { id, description, title, image, price, rating: { rate } } = product;
  const [currentItem, setCurrentItem] = useState();
  const { cartItems, addToCart, updateCart, deleteFromCart } = useContext(CartContext);

  useEffect(() => {
    const foundItem = cartItems.find((item) => item.id === id);
    setCurrentItem(foundItem || null);
  }, [cartItems, id]);

  return (
    <div className="p-4 border-[2px] border-black my-4 bg-white shadow-lg rounded-lg flex flex-col h-[550px] w-[300px]">
      <Link className="cursor-pointer flex-grow" to={`/products/${id}`}>
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="flex-grow flex flex-col justify-between py-4">
          <h2 className="text-lg font-bold mb-2 text-gray-800">
            {title.split(" ").length > 4 ? showElipses(title, 3) + "..." : title}
          </h2>
          <p className="text-gray-600 h-[100px] text-sm mb-4 line-clamp-3">
            {showElipses(description, 25)}
          </p>
        </div>
      </Link>
      <div className="flex items-center justify-between mt-2 mb-4">
        <span className="text-xl text-gray-700 font-semibold">Price: ${price}</span>
        <span className="text-yellow-500 text-lg font-bold">⭐ {rate}</span>
      </div>
      {currentItem?.quantity ? (
        <div className="flex flex-col items-center w-full font-bold">
          <div className="flex items-center space-x-4 mb-4">
            <button
              className="bg-gray-200 text-black rounded px-4 py-2 hover:bg-gray-300"
              onClick={() => updateCart(product, "decrement")}
            >
              -
            </button>
            <span>{currentItem?.quantity}</span>
            <button
              className="bg-gray-200 text-black rounded px-4 py-2 hover:bg-gray-300"
              onClick={() => addToCart(product)}
            >
              +
            </button>
          </div>
          <button
            className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600 w-full"
            onClick={() => deleteFromCart(product)}
          >
            Delete From Cart
          </button>
        </div>
      ) : (
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-auto"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
