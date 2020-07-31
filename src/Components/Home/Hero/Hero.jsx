import React, { useState, useEffect } from "react";
import "./Hero.scss";
import Slider from "./Slider";
import SwiperTop from "./SwiperTop";
import Loading from "./Loading";
import SwiperBottom from "./SwiperBottom";
import ScrollAnimation from "react-animate-on-scroll";

const Hero = () => {
  return (
    <>
      <div className="header_home_hero">
        <>
          <div className="header_home_hero_right">
            <Slider />
          </div>
          <div className="header_home_hero_left">
            <div className="header_home_hero_left_top">
              <ScrollAnimation animateIn="wobble" initiallyVisible={true}>
                <SwiperTop />
              </ScrollAnimation>
            </div>
            <div className="header_home_hero_left_bottom">
              <ScrollAnimation animateIn="wobble" initiallyVisible={true}>
                <h3>نقد و بررسی</h3>
                <SwiperBottom />
              </ScrollAnimation>
            </div>
          </div>
        </>
        )
      </div>
    </>
  );
};

export default Hero;
