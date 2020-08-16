import React, { useState, useEffect } from "react";
import "./Hero.scss";
import ReactTypingEffect from "react-typing-effect";
import "./hover.scss";

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
              <a className="hvr_center" href="#">
                همه
              </a>
            </li>
            <li>
              <a className="hvr_center" href="#">
                تکنولوژی
              </a>
            </li>
            <li>
              <a className="hvr_center" href="#">
                سبک زندگی
              </a>
            </li>
            <li>
              <a className="hvr_center" href="#">
                طراحی
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
