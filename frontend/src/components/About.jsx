import React from "react";
import { FaLeaf, FaShippingFast, FaSmile, FaStore } from "react-icons/fa";

const About = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4" id="About">

        {/* Title */}
        <h2 className="text-4xl max-sm:text-2xl font-bold text-amber-400 text-center mb-6 tracking-wide">
          About Hami MiniMarket
        </h2>

        <p className="text-gray-300 text-center text-justify max-w-3xl mx-auto mb-12 text-lg">
          Hami MiniMarket is your trusted local supermarket delivering fresh fruits, vegetables, and daily essentials right to your doorstep with speed, quality, and care making your daily shopping easy 
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-amber-400/20 transition">
            <FaLeaf className="text-4xl text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Fresh Products</h3>
            <p className="text-gray-400 text-sm">
              We provide fresh fruits, vegetables, and groceries every day.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-amber-400/20 transition">
            <FaShippingFast className="text-4xl text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
            <p className="text-gray-400 text-sm">
              Quick and safe delivery to your home with trusted riders.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-amber-400/20 transition">
            <FaSmile className="text-4xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Customer First</h3>
            <p className="text-gray-400 text-sm">
              Your satisfaction is our number one priority.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-amber-400/20 transition">
            <FaStore className="text-4xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Local Business</h3>
            <p className="text-gray-400 text-sm">
              Proudly serving our local community with affordable prices.
            </p>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="mt-14 text-center">
          <p className="text-gray-300 max-w-4xl mx-auto text-lg">
            At <span className="text-amber-400 font-bold">Hami MiniMarket</span>,
            we believe grocery shopping should be simple, fast, and affordable.
            Our mission is to connect you with fresh food and daily essentials
            without stress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
