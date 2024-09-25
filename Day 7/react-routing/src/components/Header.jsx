import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header className="flex justify-between p-4 text-xl font-bold bg-[tomato] text-white">
        <h1 className="cursor-pointer">
          <Link to="/">React Routing</Link>
        </h1>
        <nav>
          <ul className="flex items-center justify-between gap-5">
            <li className="cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/products">Products</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/store">Store</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </ >
  )
}

export default Header
