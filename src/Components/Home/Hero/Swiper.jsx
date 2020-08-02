import React from "react";
import img from "../../../Images/headphone4.png";
import ScrollAnimation from "react-animate-on-scroll";
import ReactTypingEffect from "react-typing-effect";

const Swiper = () => {
  return (
    <>
      <div id="content">
        <div className="right">
          <img src={img} alt="product" className="right_img" />
        </div>
        <div className="left">
          <p className="left_title">این یک محصول فوق العاده است !</p>
          <ReactTypingEffect
            className="left_sidetxt"
            text="بهترین هدفون های دنیا رو از من و امین بخواهید :)" //text=["Hello.", "World!"]
          />
          <input type="submit" className="left_btn"></input>
        </div>
      </div>
    </>
  );
};

export default Swiper;
