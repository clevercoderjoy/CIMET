import { Link } from "react-router-dom"

const Products = ({ product }) => {
  return (
    <>
      <div className="productContainer">
        <Link to={`/products/${product.id}`}>
          <span>{product.title}</span>
          <img src={product.image} alt={product.title} height={100} width={100} />
          <span>{product.description}</span>
        </Link>
      </div>
    </>
  )
}

export default Products
