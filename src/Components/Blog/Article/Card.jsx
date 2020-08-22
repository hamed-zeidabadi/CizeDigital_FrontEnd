import React from "react";
import "./Card.scss";
import { FaBookmark, FaHeart, FaRegComment } from "react-icons/fa";

const Card = () => {
  return (
    <>
      <div className="card_blog">
        <div class="example-1 card">
          <div class="wrapper">
            <div class="date">
              <span class="day">12</span>
              <span class="month">اسفند</span>
              <span class="year">13</span>
            </div>
            <div class="data">
              <div class="content">
                <span class="author">حامد زیدآبادی</span>
                <h1 class="title">
                  <a href="#">عنوان مقاله یک دو سه</a>
                </h1>
                <p class="text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  ...
                </p>
                <label for="show-menu" class="menu-button">
                  <span></span>
                </label>
              </div>
              <input type="checkbox" id="show-menu" />
              <ul class="menu-content">
                <li>
                  <a href="#">
                    <FaBookmark />
                  </a>
                </li>
                <li>
                  <a href="#" class="fa fa-heart-o">
                    <FaHeart />
                    <span>47</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="fa fa-comment-o">
                    <FaRegComment />
                    <span>8</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
