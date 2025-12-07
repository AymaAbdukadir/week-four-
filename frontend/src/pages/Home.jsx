import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PopularProducts from "../components/PopularProducts";
import Products from "../components/Products";
import About from "../components/About";
import Contect from "../components/Contect";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <PopularProducts/>
      <Products/>
      <About/>
      <Contect/>
      <Footer/>
    </div>
  );
};

export default Home;
