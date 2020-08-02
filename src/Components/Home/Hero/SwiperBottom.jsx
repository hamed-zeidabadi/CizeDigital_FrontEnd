import "./Swiper.scss";

import React, { useState, useEffect } from "react";
import "swiper/swiper.scss";

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
                <span> تخفیف میخوای ؟</span> <br />
                <span className="click-for-more"></span>
              </div>
            </div>
            <div className="back">
              <div className="content">
                <span>
                  با اشتراک در خبرنامه ویژه از تخفیف های ما با خبر شوید .
                </span>
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
