import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <>
      <div className="card_blog">
        <div class="wrapper">
          <div class="card radius shadowDepth1">
            <div class="card__image border-tlr-radius">
              <img
                src="http://lorempixel.com/400/200/sports/"
                alt="image"
                class="border-tlr-radius"
              />
            </div>

            <div class="card__content card__padding">
              <div class="card__share">
                <div class="card__social">
                  <a class="share-icon facebook" href="#">
                    <span class="fa fa-facebook"></span>
                  </a>
                  <a class="share-icon twitter" href="#">
                    <span class="fa fa-twitter"></span>
                  </a>
                  <a class="share-icon googleplus" href="#">
                    <span class="fa fa-google-plus"></span>
                  </a>
                </div>

                <a id="share" class="share-toggle share-icon" href="#"></a>
              </div>

              <div class="card__meta">
                <a href="#">Web Design</a>
                <time>17th March</time>
              </div>

              <article class="card__article">
                <h2>
                  <a href="#">Material Design Card - For Blog Post Article</a>
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus harum...
                </p>
              </article>
            </div>

            <div class="card__action">
              <div class="card__author">
                <img src="http://lorempixel.com/40/40/sports/" alt="user" />
                <div class="card__author-content">
                  By <a href="#">John Doe</a>
                </div>
              </div>
            </div>
          </div>

          <p class="text-center">
            Created By{" "}
            <a href="https://twitter.com/mithicher">Mithicher Baro</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
