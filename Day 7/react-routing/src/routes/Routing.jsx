import { Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import Store from '../components/Store';
import About from '../components/About';
import ProductList from "../components/ProductList";
import ProductPage from "../components/ProductPage";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default Routing
