import React, { useState, useEffect } from "react";
import "./Hero.scss";
import Slider from "./Slider";
import SwiperTop from "./SwiperTop";
// import Loading from "./Loading";
import SwiperBottom from "./SwiperBottom";
import ScrollAnimation from "react-animate-on-scroll";

import { BlockLoading } from "react-loadingg";
const BlockLoading2 = () => <BlockLoading />;

const Hero = () => {
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(true);
    }, 2500);
  }, [isLoading]);
  return (
    <>
      <div className="header_home_hero">
        <>
          <div className="header_home_hero_right">
            <Slider />
          </div>
          <div className="header_home_hero_left">
            <div className="header_home_hero_left_top">
              <SwiperTop />
            </div>
            <div className="header_home_hero_left_bottom">
              {isLoading ? (
                <>
                  <ScrollAnimation
                    animateIn="bounce"
                    initiallyVisible={true}
                    animateOnce={true}
                  >
                    <h3>نقد و بررسی</h3>

                    <SwiperBottom />
                  </ScrollAnimation>
                </>
              ) : (
                <BlockLoading2 id="BoxLoading" />
              )}
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Hero;
