import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./Swiper.scss";
import ScrollAnimation from "react-animate-on-scroll";

const SwiperS = ({ img, title, sidetxt }) => {
  return (
    <>
      <div id="content">
        <div className="right">
          <p>
            <ScrollAnimation
              delay={1500}
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              لطفا فقط بهترین ها رو از ما بخواهید !
            </ScrollAnimation>
          </p>

          <img src={img} alt="product" className="right_img" />
        </div>
        <div className="left">
          <p className="left_title">{title}</p>
          <ScrollAnimation delay={1500} animateIn="bounceInUp">
            <button type="submit" className="left_btn button -dark center">
              مشاهده محصولات
              <p>
                <ReactTypingEffect
                  className="left_sidetxt"
                  text={sidetxt} //text=["Hello.", "World!"]
                />
              </p>
            </button>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
};

export default SwiperS;
