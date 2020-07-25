import "./Swiper.scss";

import React from "react";
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";

import pic1 from "./../../../Images/phone/1.jpg";
import pic2 from "./../../../Images/phone/2.jpg";
import pic3 from "./../../../Images/phone/3.jpg";
import pic4 from "./../../../Images/phone/4.jpg";
import pic5 from "./../../../Images/phone/5.jpg";

const SwiperBottom = () => {
   const params = {
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
       renderBullet: (index, className) => {
         return '<span class="' + className + '">' + (index + 1) + "</span>";
       },
     },
   };
  return (
    <>
      <Swiper {...params} className="swiper_bottom">
        <div className="swiper_bottom_items">
          <img src={pic1} alt="images" className="swiper_bottom_items_img" />
        </div>
        <div className="swiper_bottom_items">
          <img src={pic2} alt="images" className="swiper_bottom_items_img" />
        </div>
        <div className="swiper_bottom_items">
          <img src={pic3} alt="images" className="swiper_bottom_items_img" />
        </div>
        <div className="swiper_bottom_items">
          <img src={pic4} alt="images" className="swiper_bottom_items_img" />
        </div>
        <div className="swiper_bottom_items">
          <img src={pic5} alt="images" className="swiper_bottom_items_img" />
        </div>
      </Swiper>
    </>
  );
};

export default SwiperBottom;
