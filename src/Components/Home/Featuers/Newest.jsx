import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination} from 'swiper';
import Cart from './Cart'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Favorites.scss'

import headphone from '../../../Images/features/headphone.jpg'
import btx10 from '../../../Images/features/btx10.jpg'
import redWatch from '../../../Images/features/redWatch.jpg'
import speaker from '../../../Images/features/speaker.jpg'
import speaker2 from '../../../Images/features/speaker2.jpg'




SwiperCore.use([Navigation,Pagination]);


const Newest = () => {
    return (

       

            <div className='favorites_container'>

            <Swiper
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}  >

                <SwiperSlide> <Cart Image={headphone} Title="هدفون بیتس" /></SwiperSlide>
                <SwiperSlide> <Cart Image={speaker} Title=" اسپیکر بلوتوث" /></SwiperSlide>
                <SwiperSlide> <Cart Image={redWatch} Title="ساعت هوشمند" /></SwiperSlide>
                <SwiperSlide> <Cart Image={speaker2} Title="اسپیکر پرتابل" /></SwiperSlide>
                <SwiperSlide> <Cart Image={btx10} Title="اسپیکرویژه" /></SwiperSlide>
                
            </Swiper>
                
            </div>


    )
}

export default Newest