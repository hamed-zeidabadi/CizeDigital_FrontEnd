import React, { useState, useEffect } from "react";
import "./Hero.scss";
import ReactTypingEffect from "react-typing-effect";

const Hero = () => {
  const text = [
    "داغ ترین اخبار روز دنیای تکنولوژی",
    "معرفی آخرین فناوری های روز دنیا",
    "با ما همیشه به روز باشید !",
  ];

  return (
    <>
      <div className="hero_blog">
        <div className="hero_blog_title">
          <h1>مجله خبری</h1>
          <ReactTypingEffect
            className="hero_blog_title_item"
            text={text} //text=["Hello.", "World!"]
          />
        </div>

        <div className="hero_blog_nav">
          <ul>
            <li>
              <a href="#">همه</a>
            </li>
            <li>
              <a href="#">تکنولوژی</a>
            </li>
            <li>
              <a href="#">سبک زندگی</a>
            </li>
            <li>
              <a href="#">طراحی</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
