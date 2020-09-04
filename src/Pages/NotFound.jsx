import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/404/logo.svg";
import astronaut from "../Images/404/moon.svg";
import moon from "../Images/404/astronaut.svg";
import earth from "../Images/404/earth.svg";
import rocket from "../Images/404/rocket.svg";
import err404 from "../Images/404/404.svg";

const NotFound = () => {
  return (
    <>
      <div className="p_404 bg-purple">
        <div class="stars">
          <div class="central-body">
            <img class="image-404" src={err404} width="300px" />
            <p class="central-body_p">به نظر میاد توی فضا گم شدی !</p>

            <Link
              to="/"
              class="btn-go-home"
              // target="_blank"
            >
              برگرد به خانه !
            </Link>
          </div>
          <div class="objects">
            <img class="object_rocket" src={rocket} width="40px" />
            <div class="earth-moon">
              <img class="object_earth" src={earth} width="100px" />
              <img class="object_moon" src={moon} width="80px" />
            </div>
            <div class="box_astronaut">
              <img class="object_astronaut" src={astronaut} width="140px" />
            </div>
          </div>
          <div class="glowing_stars">
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
