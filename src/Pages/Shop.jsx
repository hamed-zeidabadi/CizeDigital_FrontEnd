import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import Footer from "./../Components/Home/Footer/Footer";
import Heros from './../Components/Shop/Hero/Heros'
import Products from './../Components/Shop/Products/Products'

const Shop = () => {
  return (
    <>
    <div className="shop">

        <div className="shop_nav">
          <Navbar />
        </div>
        
        <div className="shop_hero">
          <Heros />
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
