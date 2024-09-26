import { Outlet } from "react-router-dom";
import Carousal from "./components/Carousal";
import Footer from "./components/Footer"
import Header from './components/Header';
import Hero from "./components/Hero";

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
