import React from "react";
import { SemipolarLoading } from "react-loadingg";
import "./Hero.scss";
const Loading = () => {
  return (
    <>
      <div className="loading">
        <SemipolarLoading className="loading_item" size="large" />
      </div>
    </>
  );
};
export default Loading;

// style on Hero.scss
