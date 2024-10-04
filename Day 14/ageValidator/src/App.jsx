import Footer from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="container max-w-2xl mx-auto p-4">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
