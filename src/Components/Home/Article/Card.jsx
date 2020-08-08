import React from "react";
import "./Card.scss";
const Card = () => {
  return (
    <>
      <div classNameName="card">
        <div className="record_wrap">
          <div className="record">
            <div className="record-arrow">
              <img src="http://www.portalguard.com/images/icons/right-arrow.png" />
            </div>
            <div id="record1" className="record-display"></div>
            <div className="record-desc">
              <h1>Bitter Typeface</h1>
              <p>
                Display and promote the typeface and google font 'Bitter' by Sol
                Matas in a multipage informational website. Highlighting on
                typeface usage and history in both the web and print.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
