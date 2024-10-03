import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import Product from "../pages/Product";
import Products from "../pages/Products";
import About from '../pages/About';
import Cart from '../pages/Cart';
import axios from 'axios';

const fetchDataFromUrl = async (url) => {
  const response = await axios.get(url);
  return response.data;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetchDataFromUrl("https://fakestoreapi.com/products?limit=5"),
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <Products />,
            loader: () => fetchDataFromUrl("https://fakestoreapi.com/products"),
          },
          {
            path: ":productId",
            element: <Product />,
            loader: async ({ params }) => {
              return fetchDataFromUrl(`https://fakestoreapi.com/products/${params.productId}`);
            }
          }
        ]
      },
      {
        path: "blogs",
        children: [
          {
            index: true,
            element: <Blogs />,
            loader: () => fetchDataFromUrl("https://jsonplaceholder.typicode.com/posts"),
          },
          {
            path: ":blogId",
            element: <Blog />
          }
        ]
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  }
])