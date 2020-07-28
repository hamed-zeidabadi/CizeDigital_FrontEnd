import React from "react";
import img from "../../../Images/headphone.png";
import ScrollAnimation from "react-animate-on-scroll";
import ReactTypingEffect from "react-typing-effect";


const Swiper = () => {
  return (
    <>
      <div id="content">
        <p className="content_title">این یک محصول فوق العاده است !</p>
        <img src={img} alt="product" className="content_img" />
        <input type="submit" className="content_btn"></input>
        <ReactTypingEffect
          className="content_sidetxt"
          text="بهترین هدفون های دنیا رو از من و امین بخواهید :)" //text=["Hello.", "World!"]
        />
       
      </div>
    </>
  );
};

export default Swiper;
