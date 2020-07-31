import React from 'react';
import "./Swiper.scss";

const SwiperTop = () => {
  return (
    <>
      <div id="swiper_top">
        <p>محبوب ترین دسته بندی ها</p>
        <nav>
          <ul>
            <li>
              <a href="#">هدفون ها</a>
            </li>
            <li>
              <a href="#">پاوربانک ها</a>
            </li>
            <li>
              <a href="#">شارژر ها </a>
            </li>
          </ul>
        </nav>
        <button>مشاهده بیشتر ...</button>
      </div>
    </>
  );
};

export default SwiperTop;
