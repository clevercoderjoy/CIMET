import { Link } from "react-router-dom";
import Products from "./Products";
import { useEffect, useState } from "react";

const ProductList = () => {

  const [products, setProducts] = useState([]);

  const getProductList = async () => {
    const response = (await fetch("https://fakestoreapi.com/products"));
    const responseInJson = await response.json();
    setProducts(responseInJson);
  }

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      <div className="productsContainer">
        {
          products.map((product) => 
          <Products key={product.id} product={product} />
        )
        }
      </div >
    </>
  )
}

export default ProductList
