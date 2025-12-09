import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaLeaf, FaBars, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../App";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
    const { cartCount , setCartCount} = useContext(CartContext);
    

  return (
    <header className="bg-slate-900  h-20 shadow-lg w-full p-4 md:p-5 fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-2xl md:text-3xl font-bold capitalize text-amber-400">
          hami<span className="text-white">miniMarket</span>
          <FaLeaf color="green" />
        </div>

        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex gap-8 text-white font-semibold capitalize">
              <li className="hover:text-amber-400 transition duration-300">
                <a href="#home">Home</a>
              </li>
              <li className="hover:text-amber-400 transition duration-300">
                <a href="#popular">Popular Products</a>
              </li>
              <li className="hover:text-amber-400 transition duration-300">
                <a href="#products">Products</a>
              </li>
              <li className="hover:text-amber-400 transition duration-300">
                <a href="#About">About</a>
              </li>
              <li className="hover:text-amber-400 transition duration-300">
                <a href="#contect">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/register"
              className="py-2 px-4 rounded border border-amber-400 text-white hover:bg-slate-800 transition"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="py-2 px-4 rounded bg-amber-400 hover:bg-amber-300 transition"
            >
              Login
            </Link>

            <Link to={"/carts"} className="relative">
              <FaShoppingCart className="text-white text-3xl hover:text-amber-400 transition" />
              <span className="absolute -top-2 -right-2 bg-amber-300 text-slate-800 text-xs px-1.5 rounded-full font-bold">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`
          md:hidden mt-4 flex flex-col gap-4 text-white font-semibold capitalize 
          bg-slate-800 p-5 rounded-lg shadow-lg transition-all duration-300
          ${menuOpen ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0 overflow-hidden"}
        `}
      >
        <a className="hover:text-amber-400" href="#home">Home</a>
        <a className="hover:text-amber-400" href="#">Popular Products</a>
        <a className="hover:text-amber-400" href="#">Products</a>
        <a className="hover:text-amber-400" href="#">About</a>
        <a className="hover:text-amber-400" href="#">Contact</a>

        <div className="flex flex-col gap-3 mt-4">
          <Link
            to="/register"
            className="w-full py-2 rounded border border-amber-400 text-center hover:bg-slate-700 transition"
          >
            Register
          </Link>

          <Link
            to="/login"
            className="w-full py-2 rounded bg-amber-400 hover:bg-amber-300 text-center transition"
          >
            Login
          </Link>
        </div>

        <div className="flex justify-center mt-3">
          <Link to={'/carts'} className="relative">
            <FaShoppingCart className="text-white text-3xl hover:text-amber-400 transition" />
            <span className="absolute -top-2 -right-2 bg-amber-300 text-slate-800 text-xs px-1.5 rounded-full font-bold">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
