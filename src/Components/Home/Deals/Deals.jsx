import React,{useEffect,useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination} from 'swiper';
import DiscountCart from './DiscountCart'
import ScrollAnimation from 'react-animate-on-scroll';
import {useSelector} from 'react-redux'


import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import "animate.css/animate.min.css";
import "./Deals.scss";
import "./MediaQueries.scss";
 

SwiperCore.use([Navigation,Pagination]);



const Deals = () => {

  // const [data, setdata] = useState([]);
  const products = useSelector( state => state.ProductReducer.ProductsDealsData);

  // console.log("PRODUCT : ", products);
  
  // useEffect(() => {
  //   setdata(DATA);
  // }, [DATA]);

  return (


    <div className='deals_wrapper'>

      <ScrollAnimation
      className='animate__animated'
      animateIn="animate__fadeIn" 
      style={{animationDuration:'1s'}}>

      <div className='discount_container'>


      <div className='deals_container '>

      <h2>فروش ویژه</h2>

      <Swiper
        // spaceBetween={10}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}

        breakpoints={{
          // when window width is >= 768px
          768: {
            // width: 768,
            slidesPerView: 2,
          },
          // when window width is >= 320px
          320: {
           
            slidesPerView: 1,
          },
        }}
        
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}

        >
            <SwiperSlide> <DiscountCart src={products[0].image} title={products[0].title}/> </SwiperSlide>
            <SwiperSlide> <DiscountCart src={products[1].image} title={products[1].title}/> </SwiperSlide>
            <SwiperSlide> <DiscountCart src={products[2].image} title={products[2].title}/> </SwiperSlide>
            <SwiperSlide> <DiscountCart src={products[3].image} title={products[3].title}/> </SwiperSlide>
            <SwiperSlide> <DiscountCart src={products[4].image} title={products[4].title}/> </SwiperSlide>
            

            {/*
            در زمان دینامیک شدن ویو پروژه به مشکلات بزرگی میخورد 
             */}

            {/* <SwiperSlide>

                    {
                       products.map((item) => (
                            <DiscountCart
                              key={item.id}
                              title={item.title}
                              src={item.image}
                              price={item.price}
                            />
                          ))
                        }

            </SwiperSlide> */}

            
           

      </Swiper>

    </div>

    </div>

    </ScrollAnimation>

    </div>




    
  
  )
};



export default Deals ;
