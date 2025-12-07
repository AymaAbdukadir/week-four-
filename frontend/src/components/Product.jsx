import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../App";
import toast, { Toaster } from "react-hot-toast";

const Product = ({ data }) => {
  const { cartCount, setCartCount } = useContext(CartContext);

  function addToCart(product) {
    setCartCount((prev) => prev + 1);

    axios
      .post("http://localhost:8000/add-to-cart", {
        name: product.name,
        price: product.price,
        category: product.category,
        image: product.image,
      })
      .then((res) => {
        toast.success(`${product.name} added to cart!`);
      })
      .catch((err) => {
        toast.error("Failed to add to cart");
        console.error("Error adding to cart:", err.response?.data || err.message);
      });
  }

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="w-full flex flex-wrap gap-10 justify-center">
        {data.map((item) => (
          <div
            key={item._id}
            className="w-[320px] bg-gradient-to-b from-slate-800 to-slate-900 
          border border-slate-700 rounded-2xl p-5 shadow-lg 
          transition-all duration-300 hover:scale-105 hover:shadow-amber-400/30"
          >
            <div className="rounded-xl p-4 flex justify-center">
              <img
                src={`http://localhost:8000/${item.image}`}
                alt={item.name}
                className="w-[180px] h-[150px] object-contain drop-shadow-lg"
              />
            </div>

            <h3 className="text-2xl text-amber-400 capitalize font-bold text-center mt-4">
              {item.name}
            </h3>

            <p className="text-gray-300 text-center mt-1 text-md">
              {item.description}
            </p>

            <div className="flex justify-between items-center mt-4">
              <h4 className="text-2xl font-bold text-green-400">${item.price}</h4>
              <span className="bg-amber-400/20 text-amber-400 px-3 py-1 rounded-full text-sm capitalize">
                {item.category}
              </span>
            </div>

            <button
              onClick={() => addToCart(item)}
              className="mt-5 w-full flex items-center justify-center gap-2 
            bg-gradient-to-r from-amber-400 to-yellow-500 
            hover:from-yellow-500 hover:to-amber-400 
            text-slate-900 font-bold text-lg py-2 rounded-xl 
            transition-all duration-300 active:scale-95"
            >
              <FaShoppingCart />
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
