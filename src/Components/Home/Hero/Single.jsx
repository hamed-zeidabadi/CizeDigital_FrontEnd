import React from "react";
import "./Single.scss";

const Single = ({ pic, txt }) => {
  return (
    <>
      <div id="content">
        <ul id="movieposters">
          <li>
            <img className="single_img" src={pic} alt="Iron Man 2" />
            <div className="movieinfo">
              <h3>{txt}</h3>
              <p>این یک متن تستی است برای این کامپوننت </p>
              <a href="#" title="Iron Man 2">
                خواندن بیشتر
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Single;
