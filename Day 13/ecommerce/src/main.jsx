import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/AllRoutes.jsx'
import { BlogContextProvider } from './context/BlogContext.jsx'
import { ProductContextProvider } from './context/ProductContext.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogContextProvider>
      <CartContextProvider>
        <ProductContextProvider>
          <ToastContainer />
          <RouterProvider router={router} />
        </ProductContextProvider>
      </CartContextProvider>
    </BlogContextProvider>
  </StrictMode>
)
