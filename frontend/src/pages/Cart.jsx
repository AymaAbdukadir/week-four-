import React from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

const CartsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900">
      <header className="bg-slate-900 p-6 flex  items-center shadow-md">
        <h1
          className="text-4xl font-extrabold text-amber-400 cursor-pointer"
          onClick={() => navigate("/")}
        >
          hami<span className="text-white">MiniMarket</span>
        </h1>
      </header>

      <main className="mt-6">
        <Cart />
      </main>

      <Footer />
    </div>
  );
};

export default CartsPage;
