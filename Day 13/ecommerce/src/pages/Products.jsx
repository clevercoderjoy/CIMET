import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { ProductContext } from '../context/ProductContext';

const Products = () => {
  const data = useLoaderData();
  const { productList, setProductList } = useContext(ProductContext);

  useEffect(() => {
    setProductList(data);
  }, [data]);

  return (
    <div className="bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Products</h1>
      <div className="mx-auto flex flex-wrap justify-center gap-4">
        {
          productList.map((product) => (
            <div className="p-2" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Products;
