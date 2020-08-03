import React from "react";
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss'
import "./Deals.scss";
import DiscountCart from './DiscountCart'

import doorbell from '../../../Images/hot_deales/doorbell.jpg'
import flycamera from '../../../Images/hot_deales/flycamera.jpg'
import nova3 from '../../../Images/hot_deales/nova3.jpg'
import speaker from '../../../Images/hot_deales/speaker.jpg'



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

              <div><DiscountCart src={doorbell}/></div>
              <div><DiscountCart src={flycamera}/></div>
              <div><DiscountCart src={nova3}/></div>
              <div><DiscountCart src={speaker}/></div>

          </Swiper>

    </div>

  
  )
};

export default Deals;
