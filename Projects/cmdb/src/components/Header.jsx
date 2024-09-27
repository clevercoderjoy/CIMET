import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-10 flex items-center transition-all duration-500 bg-opacity-25 backdrop-blur-md">
      <div className="flex items-center justify-between w-full max-w-screen-xl p-4 mx-auto">
        <NavLink to="/" className="cursor-pointer">
          <img src={logo} alt="Logo" className="h-12" />
        </NavLink>
        <ul className="hidden md:flex items-center space-x-6 border-2 border-gray-700 bg-transparent rounded-md p-2">
          <li className="text-white cursor-pointer">
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md border transition-colors hover:bg-pink-500 ${isActive ? "bg-pink-500 text-white border-pink-500" : "bg-transparent text-white border-transparent"
                }`
              }
            >
              Movies
            </NavLink>
          </li>
          <li className="text-white cursor-pointer">
            <NavLink
              to="/tv"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md border transition-colors hover:bg-pink-500 ${isActive ? "bg-pink-500 text-white border-pink-500" : "bg-transparent text-white border-transparent"
                }`
              }
            >
              TV Shows
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center md:hidden space-x-4">
          <HiOutlineSearch className="text-2xl text-white cursor-pointer" />
          <SlMenu className="text-2xl text-white cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
