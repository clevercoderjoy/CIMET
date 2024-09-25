import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const ProductPage = ({ products }) => {

  console.log(products)
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);
  const getProductDetails = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const responseInJson = await response.json();
    setCurrentProduct(responseInJson);
  }

  useEffect(() => {
    getProductDetails();
  }, [id]);

  return (
    <>
      {currentProduct && <div className="productContainer">
        <h2>{currentProduct.title}</h2>
        <p>{currentProduct.description}</p>
        <p>Price: ${currentProduct.price}</p>
        <img src={currentProduct.image} alt={currentProduct.title} style={{ maxWidth: "400px" }} />
      </div>}
    </>
  )
}

export default ProductPage
