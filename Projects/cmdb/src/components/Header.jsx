import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { NavLink, BrowserRouter as Router } from "react-router-dom"; // Make sure to import Router
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <Router>
      <header className="fixed top-0 w-full z-10 flex items-center transition-all duration-500 bg-opacity-25 backdrop-blur-md">
        <div className="flex items-center justify-between w-full max-w-screen-xl p-4 mx-auto">
          <div className="cursor-pointer">
            <img src={logo} alt="Logo" className="h-12" />
          </div>
          <ul className="hidden md:flex items-center space-x-6">
            <li className="text-white cursor-pointer">
              <NavLink to="/movies" className={({ isActive }) => (isActive ? "text-pink-500" : "text-white")}>
                Movies
              </NavLink>
            </li>
            <li className="text-white cursor-pointer">
              <NavLink to="/tv-shows" className={({ isActive }) => (isActive ? "text-pink-500" : "text-white")}>
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
    </Router>
  );
};

export default Header;
