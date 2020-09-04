import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination,Autoplay } from 'swiper';
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Heros.scss'

// Images for Banner ...
import banner1 from '../../../Images/Shop/banner/1.jpg'
import banner2 from '../../../Images/Shop/banner/2.jpg'
import banner3 from '../../../Images/Shop/banner/3.jpg'
import banner4 from '../../../Images/Shop/banner/4.jpg'



SwiperCore.use([Navigation,Pagination,Autoplay ]);

const Heros = () => {

    return (

        <div className='heros'>

            <Swiper
            slidesPerView={1}
            navigation
            autoplay= {
                {delay: 3000,
                disableOnInteraction: false,}
              }
            pagination={{ clickable: true }}

             >

                <SwiperSlide> <img src={banner1} alt="aks1"/> </SwiperSlide>
                <SwiperSlide> <img src={banner2} alt="aks2"/> </SwiperSlide>
                <SwiperSlide> <img src={banner3} alt="aks3"/> </SwiperSlide>
                <SwiperSlide> <img src={banner4} alt="aks4"/> </SwiperSlide>
                
            </Swiper>

        </div>
    )
}

export default Heros
