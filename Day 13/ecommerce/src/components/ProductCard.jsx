import { Link, useParams } from "react-router-dom";
import { showElipses } from "../utils/showElipses";

const ProductCard = ({ product }) => {
  const { id, description, title, image, price, rating: { rate } } = product;

  return (
    <>
      <Link className="cursor-pointer" to={`/products/${id}`}>
        <div className="p-4 border-[2px]  border-black my-4 bg-white shadow-lg rounded-lg flex flex-col h-[500px] w-[300px]">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="flex-grow flex flex-col justify-between py-4">
            <div className="flex-grow">
              <h2 className="text-lg font-bold mb-2 text-gray-800">{title.split(" ").length > 4 ? showElipses(title, 3) + "..." : title}</h2>
              <p className="text-gray-600 h-[100px] text-sm mb-4 line-clamp-3">{showElipses(description, 25)}</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl text-gray-700 font-semibold">Price: ${price}</span>
              <span className="text-yellow-500 text-lg">⭐ {rate}</span>
            </div>
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
