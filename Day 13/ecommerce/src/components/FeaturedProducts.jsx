import { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import { ProductContext } from '../context/ProductContext';

const FeaturedProducts = () => {
  const data = useLoaderData();
  const { featuredProductList, setFeaturedProductList } = useContext(ProductContext);

  useEffect(() => {
    setFeaturedProductList(data);
  }, [data]);

  return (
    <div className="bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Featured Products</h1>
      <div className="mx-auto flex flex-wrap justify-center gap-4">
        {
          featuredProductList.map((product) => (
            <div className="p-2" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default FeaturedProducts;
