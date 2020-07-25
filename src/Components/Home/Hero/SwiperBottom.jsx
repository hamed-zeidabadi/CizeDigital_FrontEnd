import React from "react";
import Swiper from "react-id-swiper";
import pic1 from "./paris.jpg";

import "swiper/swiper.scss";
import "./Swiper.scss";

const SwiperBottom = () => {
  const params = {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  return (
    <Swiper {...params}>
      <div>
        test test ...
        <img src={pic1} alt="" style={{ width: "200px", height: "200px" }} />
      </div>
      <div>
        test test ...
        <img src={pic1} alt="" style={{ width: "200px", height: "200px" }} />
      </div>
      <div>
        test test ...
        <img src={pic1} alt="" style={{ width: "200px", height: "200px" }} />
      </div>
    </Swiper>
  );
};
export default SwiperBottom;
