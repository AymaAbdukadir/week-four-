import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./pages/Home";
import CartsPage from "./pages/Cart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

function App() {
  return (
    <CartProvider>
      <div className="bg-slate-900 min-h-screen w-full overflow-x-hidden">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carts" element={<CartsPage />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
