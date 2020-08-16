import React from "react";
import "./Swiper.scss";
import "./MediaQueries.scss";
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { EffectFlip } from "swiper";
import "swiper/components/effect-flip/effect-flip.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperS from "./Swiper";
import img1 from "../../../Images/headphone4.png";
import img2 from "../../../Images/watch.png";
import img3 from "../../../Images/headphone1.png";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([EffectFlip]);

export default () => {
  const [state, setstate] = React.useState([
    {
      img: img1,
      title: "یه محصول خوب",
      sidetxt: "بهترین هدفون های دنیا !",
    },
    {
      img: img2,
      title: "یه محصول شیک ",
      sidetxt: "با کیفیت ترین ساعت های هوشمند دنیا !",
    },
    {
      img: img3,
      title: "یه محصول زیبا",
      sidetxt: "یک هدفون جذاب !",
    },
  ]);

  return (
    <Swiper
      effect="flip"
      id="swiper_main"
      Autoplay
      spaceBetween={100}
      slidesPerView={3}
      pagination={{ clickable: true }}
    >
      {state.map((item) => (
        <SwiperSlide className="swiper_main_item">
          <SwiperS img={item.img} title={item.title} sidetxt={item.sidetxt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
