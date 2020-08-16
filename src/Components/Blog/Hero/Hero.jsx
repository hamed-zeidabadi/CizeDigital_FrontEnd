/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./Hero.scss";
import "./hover.scss";

import ReactTypingEffect from "react-typing-effect";

const Hero = () => {
  const [isActive, setisActive] = useState({
    link1: false,
    link2: false,
    link3: false,
    link4: false,
  });
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
                  isActive.link1
                    ? "hvr_line_active hvr-wobble-vertical"
                    : "hvr_line_disable hvr-wobble-vertical"
                }
                href="#"
                onClick={() => setisActive({ link1: !isActive.link1 })}
              >
                همه
              </a>
            </li>
            <li>
              <a
                className={
                  isActive.link2
                    ? "hvr_line_active hvr-wobble-vertical"
                    : "hvr_line_disable hvr-wobble-vertical"
                }
                href="#"
                onClick={() => setisActive({ link2: !isActive.link2 })}
              >
                تکنولوژی
              </a>
            </li>
            <li>
              <a
                className={
                  isActive.link3
                    ? "hvr_line_active hvr-wobble-vertical"
                    : "hvr_line_disable hvr-wobble-vertical"
                }
                href="#"
                onClick={() => setisActive({ link3: !isActive.link3 })}
              
              >
                سبک زندگی
              </a>
            </li>
            <li>
              <a
                className={
                  isActive.link4
                    ? "hvr_line_active hvr-wobble-vertical"
                    : "hvr_line_disable hvr-wobble-vertical"
                }
                href="#"
                onClick={() => setisActive({ link4: !isActive.link4 })}
              
              >
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
