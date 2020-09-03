import React from "react";
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss'
import "./Deals.scss";
import DiscountCart from './DiscountCart'

import doorbell from '../../../Images/hot_deales/doorbell.jpg'
import flycamera from '../../../Images/hot_deales/flycamera.jpg'
import nova3 from '../../../Images/hot_deales/nova3.jpg'
import speaker from '../../../Images/hot_deales/speaker.jpg'
import headphone_bt from '../../../Images/hot_deales/headphone_bt.jpg'



const Deals = () => {

  const params = {

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
,
    slidesPerView: 2,

    
    // spaceBetween: 2,

    pagination: {
      type: 'bullets',
      el: '.swiper-pagination',
      clickable: true,
    },

  
  }

  return (


    <div className='deals_container'>

      <h2>فروش ویژه</h2>

          <Swiper {...params} >

            
               <div>
                <DiscountCart src={headphone_bt} title='هدفون بلوتوث'/>
              </div>
              <div>
                <DiscountCart src={flycamera} title='دوربین پرنده'/>
              </div>
              <div>
                <DiscountCart src={nova3} title='گوشی نوا 3'/>
              </div>
              <div>
                <DiscountCart src={doorbell} title='زنگ ویدئویی '/>
              </div>
              <div>
                <DiscountCart src={speaker} title=' اسپیکر سخنرانی'/>
              </div>

          </Swiper>

    </div>

  
  )
};

export default Deals;
