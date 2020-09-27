import React from 'react'
import './RightMenu.scss';
// import logo from '../../../../Images/mega_menu/home/output.png'
import logo from '../../../../Images/mega_menu/home/logo2.png'
import modern from '../../../../Images/mega_menu/home/home-modern.png'
import elegant from '../../../../Images/mega_menu/home/home-elegant.png'
import beauti from '../../../../Images/mega_menu/home/home-metro.jpg'
import smart from '../../../../Images/mega_menu/home/home-stylist.jpg'
import { Link } from "react-router-dom";


const RightMenu =()=>{

    return(

        <>
         <img  className='header_home_nav_right_logo' src={logo}/>
         

        <Link to="/"  className='header_home_nav_right_home has_sub_menu'>خانه

            <div className='header_home_nav_right_home_menu sub_menu'>

                    <div className="header_home_nav_right_home_menu_image">

                        <div className="header_home_nav_right_home_menu_image_item">
                            <img src= {modern} alt="modern"/>
                            <p>Home modern</p>
                        </div>

                        <div className="header_home_nav_right_home_menu_image_item">
                            <img src= {smart} alt="modern"/>
                            <p>Home smart</p>
                        </div>

                        <div className="header_home_nav_right_home_menu_image_item">
                            <img src= {beauti} alt="modern"/>
                            <p>Home beauti</p>
                        </div>

                        <div className="header_home_nav_right_home_menu_image_item">
                            <img src= {elegant} alt="modern"/>
                            <p>Home elegant</p>
                        </div>
                        
                    
                    </div>

             <div className="header_home_nav_right_home_menu_insta"></div>

            </div>

        </Link>



        <Link to="/shop"  className='header_home_nav_right_shop  has_sub_menu'>فروشگاه

            <div className='header_home_nav_right_shop_menu sub_menu'>

                <div className='header_home_nav_right_shop_menu_items'>

                    <h4>دسته بندی ها</h4>

                    <ul>
                        <li> <a href='#'> هدفون</a> </li>
                        <li> <a href='#'> هندزفری</a> </li>
                        <li> <a href='#'> بلند گو</a> </li>
                        <li> <a href='#'> قاب</a> </li>
                        <li> <a href='#'> محافظ</a> </li>
                    </ul>
                        
                    
                </div>

                
                <div className='header_home_nav_right_shop_menu_items'>

                    <h4>دسته بندی ها</h4>

                    <ul>
                        <li> <a href='#'> هدفون</a> </li>
                        <li> <a href='#'> هندزفری</a> </li>
                        <li> <a href='#'> بلند گو</a> </li>
                        <li> <a href='#'> قاب</a> </li>
                        <li> <a href='#'> محافظ</a> </li>
                    </ul>
                        
                    
                </div>


                
                <div className='header_home_nav_right_shop_menu_items'>

                    <h4>دسته بندی ها</h4>

                    <ul>
                        <li> <a href='#'> هدفون</a> </li>
                        <li> <a href='#'> هندزفری</a> </li>
                        <li> <a href='#'> بلند گو</a> </li>
                        <li> <a href='#'> قاب</a> </li>
                        <li> <a href='#'> محافظ</a> </li>
                    </ul>
                        
                    
                </div>



                
                <div className='header_home_nav_right_shop_menu_items'>

                    <h4>دسته بندی ها</h4>

                    <ul>
                        <li> <a href='#'> هدفون</a> </li>
                        <li> <a href='#'> هندزفری</a> </li>
                        <li> <a href='#'> بلند گو</a> </li>
                        <li> <a href='#'> قاب</a> </li>
                        <li> <a href='#'> محافظ</a> </li>
                    </ul>
                        
                    
                </div>



                             
                <div className='header_home_nav_right_shop_menu_items'>

                    <h4>دسته بندی ها</h4>

                    <ul>
                        <li> <a href='#'> هدفون</a> </li>
                        <li> <a href='#'> هندزفری</a> </li>
                        <li> <a href='#'> بلند گو</a> </li>
                        <li> <a href='#'> قاب</a> </li>
                        <li> <a href='#'> محافظ</a> </li>
                    </ul>
                        
                    
                </div>



                                 
                <div className='header_home_nav_right_shop_menu_items'>

                    <h4>دسته بندی ها</h4>

                    <ul>
                        <li> <a href='#'> هدفون</a> </li>
                        <li> <a href='#'> هندزفری</a> </li>
                        <li> <a href='#'> بلند گو</a> </li>
                        <li> <a href='#'> قاب</a> </li>
                        <li> <a href='#'> محافظ</a> </li>
                    </ul>
                        
                    
                </div>

            </div>




        </Link>




        <Link to="/blog"  className='header_home_nav_right_blog has_sub_menu'>بلاگ
        

            <div className='header_home_nav_right_blog_menu sub_menu'>

                    
                    <div className='header_home_nav_right_blog_menu_items'>

                            <h4>جدیدترین ها</h4>

                            <ul>
                                <li> <a href='#'> خرید هدفون  </a> </li>
                                <li> <a href='#'> خرید هندزفری</a> </li>
                                <li> <a href='#'> خرید بلند گو </a> </li>
                                <li> <a href='#'>  خرید قاب</a> </li>
                                <li> <a href='#'>  خریدمحافظ</a> </li>
                            </ul>
                                
                    </div>

                    <div className='header_home_nav_right_blog_menu_items'>

                                <h4>محبوب ترین ها</h4>

                                <ul>
                                    <li> <a href='#'> خرید هدفون  </a> </li>
                                    <li> <a href='#'> خرید هندزفری</a> </li>
                                    <li> <a href='#'> خرید بلند گو </a> </li>
                                    <li> <a href='#'>  خرید قاب</a> </li>
                                    <li> <a href='#'>  خریدمحافظ</a> </li>
                                </ul>
            
                    </div>


            </div>
        
        </Link>




        <Link to="/404" >خطای ۴۰۴ </Link>

        </>

    )
   
}


export default RightMenu
