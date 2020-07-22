import React from 'react'
import './RightMenu.scss';
import { Link } from "react-router-dom";


const RightMenu =()=>{

    return(

        <>
        
        <Link to="/"  className='header_home_nav_right_home'>خانه</Link>
        <Link to="/shop"  className='header_home_nav_right_shop'>فروشگاه</Link>
        <Link to="/blog"  className='header_home_nav_right_blog'>بلاگ</Link>
        <Link to="/404" >خطای ۴۰۴ </Link>

        </>

    )
   
}


export default RightMenu
