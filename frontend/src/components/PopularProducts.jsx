import React from "react";
import { FaHeart, FaInfoCircle  } from "react-icons/fa";
import mango from "../assets/mango.png";
import strawberry from "../assets/strawberry.png";
import beetroot from "../assets/Beetroot.png";
import cherry from "../assets/cherry.png";
import grape from "../assets/grape.png";
import carrot from "../assets/carot.png";

const products = [
  { id: 1, name: "Carrot", image: carrot },
  { id: 2, name: "Beetroot", image: beetroot },
  { id: 3, name: "Cherry", image: cherry },
  { id: 4, name: "Strawberry", image: strawberry },
  { id: 5, name: "Mango", image: mango },
  { id: 6, name: "Grape", image: grape },
];

const PopularProducts = () => {
  return (
    <div className="min-h-[50vh] max-w-[95%] mx-auto py-20">
      <h1 className="text-4xl text-amber-400 capitalize font-bold tracking-wider mb-14 max-sm:text-center" id="popular">
        Popular Products
      </h1>

      {/* FLEX → One line on desktop, stacked on mobile */}
      <div
        className="
          flex 
          gap-6
          justify-start
          items-center
          max-sm:flex-col
          max-sm:flex-wrap
          
          scrollbar-none
          px-2
        "
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="
              group
              relative
              w-[250px] 
              h-[300px]
              max-sm:w-[300px]
              max-sm:h-[350px]
              bg-amber-300 
              rounded-3xl 
              p-4 
              shadow-md 
              flex 
              flex-col 
              items-center 
              justify-between
              transition-all 
              duration-300
              hover:scale-105
              hover:shadow-lg
              cursor-pointer
            "
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="
                w-[120px] 
                h-[120px] 
                max-sm:w-[150px]
                max-sm:h-[150px]
                object-contain 
                transition-transform 
                duration-300
                group-hover:scale-110
              "
            />

            {/* Product Name */}
            <h5 className="mt-4 font-bold text-black text-lg max-sm:text-xl">
              {product.name}
            </h5>

            {/* Icons */}
            <div className="mt-4 flex gap-4 text-white text-xl">
              <FaHeart className="hover:text-red-500 transition-colors duration-300" />
              <div className="mt-4 flex justify-center gap-2">
  <div className="
      p-3 
      rounded-full 
      bg-amber-400 
      text-white 
      hover:bg-amber-500 
      transition-all 
      duration-300 
      cursor-pointer
      shadow-lg
      hover:shadow-xl
    ">
    <FaInfoCircle size={20} />
  </div>
</div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
