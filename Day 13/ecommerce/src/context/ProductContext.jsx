import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {

  const [productList, setProductList] = useState([]);
  const [featuredProductList, setFeaturedProductList] = useState([]);

  return (
    <>
      <ProductContext.Provider value={{ featuredProductList, setFeaturedProductList, productList, setProductList }}>
        {children}
      </ProductContext.Provider>
    </>
  )
}