import React from "react";
import Header from "./../Components/Shop/Header";
import ShopgCart from "./../Components/Shop/Cart/ShopCart"
const Shop = () => {
  return (
    <>
      <div className="shop">
        <Header />
        فروشگاه
        <ShopgCart />
      </div>
    </>
  );
};

export default Shop;
