/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./Hero.scss";
import heroImage from '../../../Images/headphone2.png'
import ReactTypingEffect from "react-typing-effect";





const Hero = () => {

  const [isActive, setisActive] = useState({
    link1: true,
    link2: false,
    link3: false,
    link4: false,
  });


  const text = [
      
    "بهترین محصولات",
    "به روز ترین ها",
  ];



  return (
    <>
      <div className="hero_shop">

        <div className="hero_shop_title">

           <div>
                <h1>فروشگاه</h1>
                <ReactTypingEffect
                    className="hero_shop_title_item"
                    text={text} 
                />
           </div>

           <img  src={heroImage}/>
        
        </div>

        <div className="hero_shop_nav">

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
                هدفون
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
                اسپیکر
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
                گیمینگ
              </a>
            </li>

          </ul>

        </div>

      </div>
      
    </>
  );
};

export default Hero;
