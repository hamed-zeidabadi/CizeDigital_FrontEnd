import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import SwiperTop from "./SwiperTop";

const Hero = () => {
  return (
    <>
      <div className="header_home_hero">
        <div className="header_home_hero_right">
          <Slider />
        </div>
        <div className="header_home_hero_left">
          <div className="header_home_hero_left_top">
            <h3>نقد و بررسی</h3>
            <SwiperTop />
          </div>
          <div className="header_home_hero_left_bottom">پایین</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
