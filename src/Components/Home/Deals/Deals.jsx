import React from "react";
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss'
import "./Deals.scss";
import DiscountCart from './DiscountCart'



const Deals = () => {

  const params = {
    slidesPerView: 2,
    // spaceBetween: 2,
    pagination: {
      // el: '.swiper-pagination',
      clickable: true,
    }
  }

  return (


    <div className='deals_container'>

      <h2>فروش ویژه</h2>

          <Swiper {...params} >

              <div><DiscountCart/></div>
              <div><DiscountCart/></div>
              <div><DiscountCart/></div>
              <div><DiscountCart/></div>

          </Swiper>

    </div>

  
  )
};

export default Deals;
