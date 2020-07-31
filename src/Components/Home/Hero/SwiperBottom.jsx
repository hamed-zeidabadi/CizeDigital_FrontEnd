import "./Swiper.scss";

import React, { useState, useEffect } from "react";
import "swiper/swiper.scss";

import pic1 from "./../../../Images/phone/1.jpg";
import pic2 from "./../../../Images/phone/2.jpg";
import pic3 from "./../../../Images/phone/3.jpg";
import pic4 from "./../../../Images/phone/4.jpg";
import pic5 from "./../../../Images/phone/5.jpg";

const Card = () => {
  return (
    <div id="card">
      <div className="container">
        <div className="row flip-boxes">
          <div className="col-md-3 col-sm-4 col-8 flip-box">
            <div
              className="front"
              // style={{
              //   BackgroundImage:
              //     "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350",
              // }}
            >
              <div className="content text-center">
                تخفیف میخوای ؟
                <br />
                <span className="click-for-more"></span>
              </div>
            </div>
            <div className="back">
              <div className="content">
                با اشتراک در خبرنامه ویژه از تخفیف های ما با خبر شوید .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SwiperBottom = () => {
  return (
    <>
      <Card />
    </>
  );
};

export default SwiperBottom;
