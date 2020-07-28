import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import './ShoppingCart.scss'



const ShopingCart =(props)=>{

    return(

        <div>

          <a href='#' className='header_home_nav_left_icons_cart'
          onClick={()=>props.HandleOpenBasket()}
          > <FaShoppingCart /> </a> 

          <div className='basket_container'>

            <div className='basket_cart_items'>

              <a className='basket_cart_items_exit_button'
              onClick={()=>props.HandleOpenBasket()}
              ><BsX /></a>
              <h3 className='basket_cart_items_title'>سبد خرید شما</h3>
        
            </div>

            <h4>سبد خرید شما خالی است</h4>
            <a href='#' className='basket_start_shoping'>شروع خرید</a>
          </div>

        </div>

    )



}


export default ShopingCart