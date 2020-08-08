import React from "react";
import "./Article.scss";
import Card from "./Card";
const Article = () => {
  return (
    <>
      <div className="article">
        <Card />
        <Card /> <Card /> <Card />
      </div>
    </>
  );
};

export default Article;
