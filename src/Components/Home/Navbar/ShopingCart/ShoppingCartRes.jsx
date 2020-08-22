import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import './ShoppingCartRes.scss'



const ShopingCartRes =(props)=>{

    return(

        <>

          <a href='#' className='header_home_nav_left_icons_cart'
          onClick={()=>props.HandleOpenBaskets()}
          > <FaShoppingCart /> </a> 

          <div className='basket_containers animate__animated'>

            <div className='basket_cart_res_items'>

              <a className='basket_cart_items_exit_button'
              onClick={()=>props.HandleOpenBaskets()}
              ><BsX /></a>
              <h3 className='basket_cart_res_items_title'>سبد خرید شما</h3>
        
            </div>

            <h4>سبد خرید شما خالی است</h4>
            <a href='#' className='basket_start_res_shoping'>شروع خرید</a>
          </div>

        </>

    )



}


export default ShopingCartRes