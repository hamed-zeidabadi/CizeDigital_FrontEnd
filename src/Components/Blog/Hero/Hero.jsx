/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./Hero.scss";
import ReactTypingEffect from "react-typing-effect";
import "./hover.scss";

const Hero = () => {
  const [isActive, setisActive] = useState(false);
  const text = [
    "داغ ترین اخبار روز دنیای تکنولوژی",
    "معرفی آخرین فناوری های روز دنیا",
    "با ما همیشه به روز باشید !",
  ];

  // const _handleChengeHover = () => {
  //   setisActive(true);
  // };

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
              <a
                className={
                  isActive
                    ? "hvr_line_active hvr-wobble-vertical"
                    : "hvr_line_disable hvr-wobble-vertical"
                }
                href="#"
                onClick={setisActive(!isActive)}
              >
                همه
              </a>
            </li>
            <li>
              <a className="  hvr-wobble-vertical" href="#">
                تکنولوژی
              </a>
            </li>
            <li>
              <a className=" hvr_line hvr-wobble-vertical" href="#">
                سبک زندگی
              </a>
            </li>
            <li>
              <a className=" hvr_line hvr-wobble-vertical" href="#">
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
