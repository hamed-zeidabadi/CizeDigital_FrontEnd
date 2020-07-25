import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import Slider from "./Slider";

const Hero = () => {
  return (
    <>
      <div className="header_home_hero">
        <div className="header_home_hero_right">
          <Slider />
        </div>
        <div className="header_home_hero_left">
          <div className="header_home_hero_left_top">بالا</div>
          <div className="header_home_hero_left_bottom">پایین</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
