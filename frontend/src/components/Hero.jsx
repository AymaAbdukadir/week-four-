import React from "react";
import { FaShoppingCart, FaLeaf } from "react-icons/fa";
import heroImage from "../assets/fruits-splash.png";

const Hero = () => {
  return (
    <div className='
      flex items-center justify-between 
      max-w-[90%] m-auto mt-30 
      h-[90vh]
      max-sm:flex-col max-sm:h-auto max-sm:mt-30 max-sm:gap-6
    '>
      
      {/* Content */}
      <div className='
        flex flex-col gap-4 
        w-[50%] 
        max-sm:w-full max-sm:text-center max-sm:items-center
      '>
        <h2 className='text-3xl md:text-3xl lg:text-4xl max-sm:text-2xl text-white font-semibold'>
          Hami Minimarket
        </h2>

        <h1 className='
          text-[3rem] sm:text-4xl md:text-5xl lg:text-6xl text-amber-400 font-bold tracking-normal mb-3
          leading-snug
          max-sm:text-3xl max-sm:leading-snug
        '>
          <span className="">Fresh Local Organic</span>
          <span className="block flex  items-center gap-2 max-sm:flex-col max-sm:gap-1">
          Fruits and Vegetables <FaLeaf color='green' />
          </span>
        </h1>

        <p className='text-xl sm:text-2xl md:text-2xl text-white capitalize mb-4 max-sm:text-lg'>
          At Hami Minimarket we deliver the finest fruits and vegetables,
          freshly picked and full of flavor. Eat healthy, shop local, and enjoy
          freshness in every bite.
        </p>

        {/* Buttons */}
        <div className='flex gap-4 w-[80%] max-sm:flex-col max-sm:w-full'>
          <button className='
            w-full h-14 sm:h-12 bg-gradient-to-r from-amber-400 to-amber-500 
            text-white text-xl sm:text-lg md:text-xl font-semibold tracking-wide
            rounded-xl shadow-lg shadow-amber-500/40
            hover:from-amber-500 hover:to-amber-600
            hover:shadow-xl hover:shadow-amber-500/50
            active:scale-95 transition-all duration-300
          '>
            🛒 Shop Now
          </button>

          <button className='
            w-full h-14 sm:h-12 bg-slate-800 text-white text-xl sm:text-lg md:text-xl font-semibold tracking-wide
            rounded-xl border border-slate-600 shadow-md shadow-slate-900/50
            hover:bg-slate-700 hover:shadow-lg active:scale-95
            transition-all duration-300
          '>
            🍓 View Products
          </button>
        </div>
      </div>

      {/* Image */}
      <div className='w-[50%] h-[90vh] max-sm:w-full max-sm:h-auto max-sm:mt-6 flex justify-center'>
        <img 
          src={heroImage} 
          alt='Fruits splash' 
          className='w-full h-full object-contain max-sm:max-h-[500px]' 
        />
      </div>
    </div>
  );
};

export default Hero;
