import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./Swiper.scss";

const SwiperS = ({ img, title, sidetxt }) => {
  return (
    <>
      <div id="content">
        <div className="right">
          <p>لطفا فقط بهترین ها رو از ما بخواهید !</p>
          <img src={img} alt="product" className="right_img" />
        </div>
        <div className="left">
          <p className="left_title">{title}</p>
          <ReactTypingEffect
            className="left_sidetxt"
            text={sidetxt} //text=["Hello.", "World!"]
          />
          <button type="submit" className="left_btn button -dark center">
            مشاهده محصولات
          </button>
        </div>
      </div>
    </>
  );
};

export default SwiperS;
