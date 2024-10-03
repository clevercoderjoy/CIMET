import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import Product from "../pages/Product";
import Products from "../pages/Products";
import About from '../pages/About';
import Cart from '../pages/Cart';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: ":productId",
            element: <Product />,
          }
        ]
      },
      {
        path: "blogs",
        children: [
          {
            index: true,
            element: <Blogs />
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