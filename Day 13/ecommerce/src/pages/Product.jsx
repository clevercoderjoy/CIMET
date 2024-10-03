import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const Product = () => {
  const { productId } = useParams();
  const { productList } = useContext(ProductContext);
  const [currentProduct, setCurrentProduct] = useState({});

  const findCurrentProduct = () => {
    setCurrentProduct(
      productList.find((product) => product.id === Number(productId))
    );
  };

  useEffect(() => {
    findCurrentProduct();
  }, [productId, productList]);


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full flex flex-col items-center">
        <img
          src={currentProduct?.image}
          alt={currentProduct?.title}
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2 w-full text-left">{currentProduct?.title}</h1>
        <div className="flex justify-between w-full mb-2">
          <span className="text-xl text-gray-700 font-semibold">Price: ${currentProduct?.price}</span>
          <span className="text-yellow-500 text-lg">⭐ {currentProduct?.rating?.rate}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{currentProduct?.description}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
