import React from "react";
import "./Deals.scss";
import ScrollAnimation from "react-animate-on-scroll";

const Deals = () => {
  return (
    <>
      <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
        <div className="deals">
          <h1>animateOut</h1>
        </div>
      </ScrollAnimation>
    </>
  );
};

export default Deals;
