import React from 'react'
import './Favorites.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination} from 'swiper';

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import Cart from './Cart'




SwiperCore.use([Navigation,Pagination]);


const Favorites = () => {
    return (

        <div className='favorites_container'>

         <Swiper
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}  >

              <SwiperSlide> <Cart /> </SwiperSlide>
              <SwiperSlide> <Cart /> </SwiperSlide>
              <SwiperSlide> <Cart /> </SwiperSlide>
              <SwiperSlide> <Cart /> </SwiperSlide>
              <SwiperSlide> <Cart /> </SwiperSlide>
              <SwiperSlide> <Cart /> </SwiperSlide>
           

         </Swiper>
            
        </div>

    )
}

export default Favorites

