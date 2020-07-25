import React from "react";
import Swiper from "react-id-swiper";


import "swiper/swiper.scss";
import "./Swiper.scss";
import Cube3D from "./Cube";

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
        <Cube3D />
      </div>
      <div>
        <Cube3D />
      </div>
      <div>
        <Cube3D />
      </div>
    </Swiper>
  );
};
export default SwiperBottom;
