import React from "react";
import "./Swiper.scss";

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { EffectFade, EffectCube,EffectCoverflow,EffectFlip } from "swiper";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/effect-cube/effect-cube.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/effect-flip/effect-flip.scss";



import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import SwiperS from "./Swiper";
import img1 from "../../../Images/headphone4.png";
import img2 from "../../../Images/watch.png";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([EffectFade, EffectCube,EffectCoverflow,EffectFlip]);

export default () => {
  const [state, setstate] = React.useState([
    {
      img: img1,
      title: "این یک محصول فوق العاده است !",
      sidetxt: "بهترین هدفون های دنیا رو از ما بخواهید :)",
    },
    {
      img: img2,
      title: "این یک محصول فوق العاده است !",
      sidetxt: "با کیفیت ترین ساعت های هوشمند دنیا !",
    },
  ]);

  return (
    <Swiper
      effect="flip"
      id="swiper_main"
      Autoplay
      spaceBetween={100}
      slidesPerView={3}
      //   navigation
      pagination={{ clickable: true }}
      //   scrollbar={{ draggable:false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {state.map((item) => (
        <SwiperSlide className="swiper_main_item">
          <SwiperS img={item.img} title={item.title} sidetxt={item.sidetxt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
