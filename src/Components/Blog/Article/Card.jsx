import React from "react";
import "./Card.scss";
import { FaChevronCircleLeft } from "react-icons/fa";
// import pic from "../../../Images/Blog/1.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const CardHeader = (props) => {
  const { image, category } = props;
  var style = {
    backgroundImage: "url(" + image + ")",
  };
  return (
    <header style={style} id={image} className="card-header">
      <h4 className="card-header--title">{category}</h4>
    </header>
  );
};

const Button = (props) => {
  return (
    <button className="button button-primary">
      <FaChevronCircleLeft />
      متن کامل مقاله
    </button>
  );
};

const CardBody = ({ date, title, desc }) => {
  return (
    <div className="card-body">
      <p className="date">{date}</p>

      <h2>{title}</h2>

      <p className="body-content">{desc}</p>

      <Button />
    </div>
  );
};

const Card = ({ title, desc, category, img, date }) => {
  return (
    <article className="card">
      <ScrollAnimation
        className="animate__animated"
        animateIn="animate__jackInTheBox"
        animateOut="animate__fadeOutDown"
        style={{ animationDuration: "1.5s" }}
      >
        <CardHeader image={img} category={category} />
        <CardBody title={title} desc={desc} category={category} date={date} />
      </ScrollAnimation>
    </article>
  );
};

export default Card;
