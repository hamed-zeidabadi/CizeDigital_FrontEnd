import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    
      <nav className="header_home_nav">

        <div className='header_home_nav_right'>
            <Link to="/">خانه</Link>
              <Link to="/shop">فروشگاه</Link>
              <Link to="/blog">بلاگ</Link>
              <Link to="/404">خطای ۴۰۴ </Link>
        </div>

        <div className='header_home_nav_left'>

          <p>1</p>
          <p>2</p>
          <p>3</p>
          
        </div>
      </nav>

    </>
  );
};

export default Navbar;
