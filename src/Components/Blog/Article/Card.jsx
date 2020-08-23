import React from "react";
import "./Card.scss";
import { FaBookmark, FaHeart, FaRegComment } from "react-icons/fa";
import pic from "../../../Images/Blog/1.jpg";

const CardHeader = (props) => {
  const { image } = props;
  var style = {
    backgroundImage: "url(" + image + ")",
  };
  return (
    <header style={style} id={image} className="card-header">
      <h4 className="card-header--title">اخبار</h4>
    </header>
  );
};

const Button = (props) => {
  return (
    <button className="button button-primary">
      <i className="fa fa-chevron-right"></i> متن کامل مقاله
    </button>
  );
};

const CardBody = (props) => {
  return (
    <div className="card-body">
      <p className="date">25 آبان 1399</p>

      <h2>{props.title}</h2>

      <p className="body-content">{props.text}</p>

      <Button />
    </div>
  );
};

const Card = (props) => {
  return (
    <article className="card">
      <CardHeader image={"https://source.unsplash.com/user/erondu/600x400"} />
      <CardBody
        title={"بهترین هدفون دنیا چیه ؟"}
        text={
          "این یک متن تستی است ، این یک متن تستی است ، این یک متن تستی است "
        }
      />
    </article>
  );
};

export default Card;
