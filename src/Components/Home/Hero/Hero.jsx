import React, { useState, useEffect } from "react";
import "./Hero.scss";
import Slider from "./Slider";
import SwiperTop from "./SwiperTop";
import Loading from "./Loading";
import SwiperBottom from "./SwiperBottom";
import ScrollAnimation from "react-animate-on-scroll";

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
              <ScrollAnimation animateIn="fadeIn">
                <Slider />
              </ScrollAnimation>
            </div>
            <div className="header_home_hero_left">
              <div className="header_home_hero_left_top">
                <h3>نقد و بررسی</h3>
                <ScrollAnimation animateIn="wobble" initiallyVisible={true}>
                  <SwiperTop />
                </ScrollAnimation>
              </div>
              <div className="header_home_hero_left_bottom">
                <ScrollAnimation animateIn="wobble" initiallyVisible={true}>
                  <h3> اسکرول عمودی</h3>
                  <SwiperBottom />
                </ScrollAnimation>
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
