import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination} from 'swiper';
import Cart from './Cart'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Favorites.scss'

import iphone from '../../../Images/best_seller/iphone.jpg'
import beats from '../../../Images/best_seller/beats2.jpg'
import flycamera from '../../../Images/best_seller/flycamera.jpg'
import speaker from '../../../Images/features/speaker.jpg'
import speaker2 from '../../../Images/features/speaker2.jpg'


SwiperCore.use([Navigation,Pagination]);

const BestSeller = () => {

    return (
        
        <div className='favorites_container'>

            <Swiper
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{

              // when window width is >= 950px
              950: {

               
                slidesPerView:3,
              },
              
              768: {
                // width: 768,
                slidesPerView:2,
              },
              // when window width is >= 320px
              320: {
               
                slidesPerView: 1,
              },
            }} >

                <SwiperSlide> <Cart Image={iphone} Title="آیفون مکس" /></SwiperSlide>
                <SwiperSlide> <Cart Image={beats} Title=" بیتس استودیو" /></SwiperSlide>
                <SwiperSlide> <Cart Image={flycamera} Title="دوربین پرنده" /></SwiperSlide>
                <SwiperSlide> <Cart Image={speaker2} Title="اسپیکر پرتابل" /></SwiperSlide>
                <SwiperSlide> <Cart Image={speaker} Title="اسپیکرویژه" /></SwiperSlide>
                
            </Swiper>
            
        </div>

    )
}

export default BestSeller
