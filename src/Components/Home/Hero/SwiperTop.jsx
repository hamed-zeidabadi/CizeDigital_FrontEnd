import React from "react";
import "./Swiper.scss";

const SwiperTop = () => {
  return (
    <>
      <div id="swiper_top">
        <p>محبوب ترین دسته بندی ها</p>
        <nav>
          <ul>
            <li>
              <a className="hvr-underline-from-center" href="#">
                هدفون ها
              </a>
            </li>
            <li>
              <a className="hvr-underline-from-center" href="#">
                شارژر ها
              </a>
            </li>
            <li>
              <a className="hvr-underline-from-center" href="#">
               پاور بانک ها
              </a>
            </li>
          </ul>
        </nav>
        <button>مشاهده بیشتر ...</button>
      </div>
    </>
  );
};

export default SwiperTop;
