import "./Swiper.scss";
import Single from "./Single";

import React from "react";
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";



import pic1 from "./paris.jpg";
import pic2 from "./moscow.jpg";
import pic3 from "./ams.jpg";


const SwipeR = () => {
  const params = {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  };
  return (
    <>
      <Swiper {...params}>
        <div>
          <Single pic={pic1} txt="پاریس" />
        </div>
      </Swiper>
    </>
  );
};

export default SwipeR;
