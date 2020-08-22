import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <>
      <div className="card_blog">
        <div class="content">
          <div class="body-01">Travel report (Big teaser)</div>
    <div class="card">
      <div class="media media--2-3">
        <div class="primary-title">
          <div class="optional-header">
            <div class="thumbnail thumbnail--40x40"><img src="https://randomuser.me/api/portraits/women/47.jpg" alt="" width="40" height="40" /></div>
            <div class="primary-title">
              <div class="title">Emma Freeman</div>
              <div class="subhead">Travel Journalist</div>
            </div>
          </div>
          <div class="primary-text">The Many Lives Along the Yangtze River</div>
          <div class="secondary-text">Travel</div>
        </div>
        <img src="https://media.pixeltuner.de/wp-content/uploads/2018/06/asia-1793425_640.jpg" alt="" width="960" height="640" /> </div>
      <div class="actions">
        <div class="action-buttons">
          <button class="button" type="button">Read report</button>
        </div>
        <div class="action-icons float-right"> <i class="material-icons action-icon" role="button" title="Share">share</i> <i class="material-icons action-icon" role="button" title="More options">more_vert</i> </div>
      </div>
    </div>
        </div>
      </div>
    </>
  );
};

export default Card;
