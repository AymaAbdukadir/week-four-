import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { FaMinusCircle, FaPlusCircle, FaTimes } from "react-icons/fa";
import { CartContext } from "../App";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const { setCartCount } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("http://localhost:8000/carts")
      .then((res) => {
        setCarts(res.data);
        setCartCount(res.data.length);
      })
      .catch((err) => console.error(err));
  }, [setCartCount]);

  const updateQuantity = async (id, type) => {
    await axios.put(`http://localhost:8000/cart/${id}/update-quantity`, { type });
    const res = await axios.get("http://localhost:8000/carts");
    setCarts(res.data);
    setCartCount(res.data.length);
  };

  const removeItem = async (id) => {
   try {
    await axios.delete(`http://localhost:8000/carts/${id}`);
    
    const res = await axios.get("http://localhost:8000/carts");
    setCarts(res.data);
    setCartCount((prev) => prev-1)
  } catch (err) {
    console.error(err);
  }
  };

  const totalPrice = carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = totalPrice >= 50 ? totalPrice * 0.1 : 0;
  const finalTotal = totalPrice - discount;

  return (
    <div className="min-h-screen bg-slate-900 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-amber-400 text-center mb-15 drop-shadow-lg">
        🛒 Your Cart
      </h1>

      {carts.length === 0 ? (
        <p className="text-center text-slate-300 text-xl">Your cart is empty</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {carts.map((item) => (
              <div
                key={item._id}
                className="relative bg-slate-800 w-70 rounded-2xl shadow-xl p-6 flex flex-col items-center 
                hover:shadow-amber-400/20 hover:scale-[1.02] transition-all duration-300"
              >
                <FaTimes
                  onClick={() => removeItem(item._id)}
                  className="absolute top-3 right-3 text-xl text-amber-500 cursor-pointer hover:text-red-400 transition"
                />

                <img
                  src={`/${item.image}`}
                  alt={item.name}
                  className="w-36 h-36 object-contain rounded-lg"
                />

                <h2 className="text-2xl font-semibold text-white mt-4 tracking-wide">
                  {item.name}
                </h2>

                <p className="text-amber-400 text-xl mt-2 font-bold">${item.price}</p>

                <p className="text-sm text-slate-400 mt-1">
                  Category: <span className="text-white font-medium">{item.category}</span>
                </p>

                <p className="text-sm text-slate-400 mt-1">
                  Quantity: <span className="text-white font-medium">{item.quantity}</span>
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={() => updateQuantity(item._id, "increase")}
                    className="bg-amber-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-amber-400 transition shadow-md"
                  >
                    <FaPlusCircle />
                  </button>
                  <button
                    onClick={() => updateQuantity(item._id, "decrease")}
                    className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-400 transition shadow-md"
                  >
                    <FaMinusCircle />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-xl w-full mx-auto mt-10 bg-slate-800 p-6 rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Order Summary</h2>

            <p className="text-lg text-slate-300">
              Total Price: <span className="text-amber-400 font-bold">${totalPrice.toFixed(2)}</span>
            </p>

            {discount > 0 && (
              <p className="text-lg text-green-400 mt-2">
                Discount (10%): -${discount.toFixed(2)}
              </p>
            )}

            <p className="text-xl font-bold text-white mt-3">
              Final Total: <span className="text-amber-400">${finalTotal.toFixed(2)}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
