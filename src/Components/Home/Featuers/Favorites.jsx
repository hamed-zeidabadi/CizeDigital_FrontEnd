import React from 'react'
import '.Favorites.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination} from 'swiper';

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';




SwiperCore.use([Navigation,Pagination]);


const Favorites = () => {
    return (

        <div>

         <Swiper
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}  >

              <SwiperSlide> </SwiperSlide>
              <SwiperSlide> </SwiperSlide>
              <SwiperSlide> </SwiperSlide>
              <SwiperSlide> </SwiperSlide>
              <SwiperSlide> </SwiperSlide>

         </Swiper>
            
        </div>

    )
}

export default Favorites

