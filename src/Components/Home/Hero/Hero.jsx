import React, { useState, useEffect } from "react";
import "./Hero.scss";
import Slider from "./Slider";
import SwiperTop from "./SwiperTop";
import Loading from "./Loading";
import SwiperBottom from "./SwiperBottom";

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
                <h3> اسکرول عمودی</h3>
                <SwiperBottom />
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
