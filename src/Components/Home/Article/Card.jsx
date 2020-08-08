import React from "react";
import "./Card.scss";
const Card = ({ img, title, subtitle }) => {
  return (
    <>
      <div className="record">
        <div className="record-arrow">
          <img src={img} />
        </div>
        <div
          id="record1"
          className="record-display"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="record-desc">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <button>متن کامل</button>
        </div>
      </div>
    </>
  );
};









export default Card;
