import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((result) => {
        setProducts(result.data);
        setAllProducts(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterByName = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setProducts(filtered);
  };

  const filterByCategory = (category) => {
    const filtered = allProducts.filter(
      (product) => product.category === category
    );
    setProducts(filtered);
  };

  const filterByPrice = (e) => {
    const value = e.target.value;
    setPriceFilter(value);

    if (value === "") {
      setProducts(allProducts);
      return;
    }

    const filtered = allProducts.filter(
      (product) => parseFloat(product.price) >= parseFloat(value)
    );
    setProducts(filtered);
  };

  const resetFilters = () => {
    setProducts(allProducts);
    setSearchTerm("");
    setPriceFilter("");
  };

  return (
    <div className="max-w-[95%] mx-auto mt-20" id="products">
      <h1 className="text-4xl text-amber-400 capitalize font-bold tracking-wider mb-10 max-sm:text-center">
        Products
      </h1>

     
      <div className="w-full p-6 bg-slate-800 mb-20 rounded-2xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">

        <div className="w-full lg:w-1/3 relative">
          <input
            value={searchTerm}
            onChange={filterByName}
            type="text"
            placeholder="Search product..."
            className="w-full py-3 pl-12 pr-4 rounded-xl bg-slate-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-amber-400 transition"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">🔍</span>
        </div>

        <div className="flex items-center gap-4 bg-slate-700 px-4 py-3 rounded-2xl shadow-lg">
          <button
            onClick={() => filterByCategory("Fruit")}
            className="px-6 py-2 bg-amber-400 text-slate-900 rounded-xl font-semibold hover:bg-amber-300 transition"
          >
            Fruits
          </button>
          <button
            onClick={() => filterByCategory("Vegetable")}
            className="px-6 py-2 bg-slate-600 text-white rounded-xl font-semibold hover:bg-slate-500 transition"
          >
            Vegetables
          </button>
          <button
            onClick={resetFilters}
            className="px-6 py-2 bg-slate-500 text-white rounded-xl font-semibold hover:bg-slate-400 transition"
          >
            All
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-3 w-full lg:w-1/4">
          <label className="text-white text-lg">Price</label>
          <input
            type="number"
            value={priceFilter}
            onChange={filterByPrice}
            placeholder="Min price"
            className="w-full py-2 px-3 rounded-lg bg-slate-700 text-white outline-none placeholder-gray-400 focus:ring-2 focus:ring-amber-400"
          />
        </div>

      </div>

      {products.length === 0 ? (
        <div className="flex justify-center py-20">
          <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <Product data={products} />
      )}
    </div>
  );
};

export default Products;
