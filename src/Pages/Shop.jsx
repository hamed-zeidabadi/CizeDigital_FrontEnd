import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import Footer from "./../Components/Home/Footer/Footer";
import Hero from './../Components/Shop/Hero/Hero'
import Products from './../Components/Shop/Products/Products'

const Shop = () => {
  return (
    <>
    <div className="shop">

        <div className="shop_nav">
          <Navbar />
        </div>
        
        <div className="shop_hero">
          <Hero />
        </div>

        <div className="shop_products">
          <Products />
        </div>

        <div className="shop_footer">
          <Footer />
        </div>

    </div>
  </>
  );
};

export default Shop;
