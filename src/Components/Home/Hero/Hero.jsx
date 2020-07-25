import React, { useState, useEffect } from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import SwiperTop from "./SwiperTop";
import Loading from "./Loading";
import SwiperBottom from "./SwiperBottom";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/src/styled/cube-animation/cube-animation.scss";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, [isLoading]);

  return (
    <>
      <div className="header_home_hero">
        {isLoading ? (
          <>
            <div className="header_home_hero_right">
              <Slider />
            </div>
            <div className="header_home_hero_left">
              <div className="header_home_hero_left_top">
                <h3>نقد و بررسی</h3>
                <SwiperTop />
              </div>
              <div className="header_home_hero_left_bottom">
                <AwesomeSlider animation="cubeAnimation">
                  <div data-src="/path/to/image-0.png" >1</div>
                  <div data-src="/path/to/image-1.png" >2</div>
                  <div data-src="/path/to/image-2.jpg" >3</div>
                  
                </AwesomeSlider>
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Hero;
