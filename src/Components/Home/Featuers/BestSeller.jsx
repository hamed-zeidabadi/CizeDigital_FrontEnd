import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination} from 'swiper';
import Cart from './Cart'
import {useSelector} from 'react-redux'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Favorites.scss'



SwiperCore.use([Navigation,Pagination]);


const BestSeller = () => {

  const products = useSelector(
     state => state.ProductReducer.ProductsBestSellersData
     );
  console.log(products);
  

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

                <SwiperSlide> <Cart Image={products[0].image} Title={products[0].title} /></SwiperSlide>
                <SwiperSlide> <Cart Image={products[1].image} Title={products[1].title} /></SwiperSlide>
                <SwiperSlide> <Cart Image={products[2].image} Title={products[2].title} /></SwiperSlide>
                <SwiperSlide> <Cart Image={products[3].image} Title={products[3].title} /></SwiperSlide>
                <SwiperSlide> <Cart Image={products[4].image} Title={products[4].title} /></SwiperSlide>


                {/* <SwiperSlide> 
                {
                       products.map((item) => (
                            <Cart
                              key={item.id}
                              Title={item.title}
                              Image={item.image}
                              price={item.price}
                            />
                          ))
                        }
                </SwiperSlide> */}
                
            </Swiper>
            
        </div>

    )
}

export default BestSeller
