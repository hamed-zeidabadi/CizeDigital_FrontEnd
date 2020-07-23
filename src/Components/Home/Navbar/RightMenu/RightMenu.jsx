import React from 'react'
import './RightMenu.scss';
import logo from '../../../../Images/mega_menu/home/output.png'
import { Link } from "react-router-dom";


const RightMenu =()=>{

    return(

        <>
         <img  className='header_home_nav_right_logo' src={logo}/>
         

        <Link to="/"  className='header_home_nav_right_home has_sub'>خانه

            <div className='header_home_nav_right_home_menu sub_menu'>
                <div className="">ss</div>
                <div className="">ww</div>
            </div>

        </Link>


        <Link to="/shop"  className='header_home_nav_right_shop'>فروشگاه</Link>
        <Link to="/blog"  className='header_home_nav_right_blog'>بلاگ</Link>
        <Link to="/404" >خطای ۴۰۴ </Link>

        </>

    )
   
}


export default RightMenu
