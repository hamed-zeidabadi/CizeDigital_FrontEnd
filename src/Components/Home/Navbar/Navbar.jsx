import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header_home_nav">
        <Link to="/">خانه</Link>
        <Link to="/shop">فروشگاه</Link>
        <Link to="/blog">بلاگ</Link>
        <Link to="/404">خطای ۴۰۴ </Link>
      </div>
    </>
  );
};

export default Navbar;
