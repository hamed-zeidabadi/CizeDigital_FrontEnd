import React, { useRef } from "react";
import Carousel from "react-3d-carousels";

import "./Slider.scss";

const Slider = () => {
  const carousel = useRef(null);

  return (
    <div className="App">
      <div className="App">
        <h1>محصول جدید</h1>
        <div
          style={{
            width: 300,
            height: 300,
            margin: "0 auto",
          }} 
          
        >
          <Carousel
            ref={carousel}
            width={300}
            height={300}
            direction={"horizontal"}
            effect={"3d"}
            index={0}
          >
            <div style={{ background: "green", width: 300, height: 300 }}>
              1
            </div>
            <div style={{ background: "red", width: 300, height: 300 }}>2</div>
            <div style={{ background: "blue", width: 300, height: 300 }}>3</div>
            <div style={{ background: "yellow", width: 300, height: 300 }}>
              4
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slider;
