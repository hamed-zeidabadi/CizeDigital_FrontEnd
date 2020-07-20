import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header_blog">
        <Link to="/">خانه</Link>
        <Link to="/shop">فروشگاه</Link>
        <Link to="/blog">بلاگ</Link>
        <Link to="/404">خطای ۴۰۴ </Link>
      </div>
    </>
  );
};

export default Header;
