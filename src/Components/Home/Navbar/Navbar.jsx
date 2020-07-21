import React from "react";
import "./Navbar.scss";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
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

            <div className='header_home_nav_left_rightItems' >
              <a href='#' className='header_home_nav_left_icons_cart'> <FaShoppingCart /></a>
              <a href='#' className='header_home_nav_left_icons_user'><FaUserAlt /></a>
            </div>
   
            <div className='header_home_nav_left_leftItem'>
              <a href='#' className='header_home_nav_left_icons_search'> <BsSearch /></a>
            </div>
        
         
          
        </div>
        
      </nav>

    </>
  );
};

export default Navbar;
