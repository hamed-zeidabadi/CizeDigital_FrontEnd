import React from "react";
import "./Slider.scss";
import SwiperJS from "./SwiperJS.jsx";
import "./MediaQueries.scss";

const Slider = () => {
  return (
    <>
      <div className="slider_row">
        <SwiperJS />
      </div>
    </>
  );
};

export default Slider;
