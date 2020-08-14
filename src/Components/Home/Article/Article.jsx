import React from "react";
import "./Article.scss";
import Card from "./Card";
import img1 from "../../../Images/Article/1.jpg";
import img2 from "../../../Images/Article/2.jpg";
import img3 from "../../../Images/Article/3.jpg";
import img4 from "../../../Images/Article/4.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import "./MediaQueries.scss";

const Article = () => {
  const [state, setstate] = React.useState([
    {
      img: img1,
      title: "عنوان اصلی مقاله",
      subtitle:
        " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز .... ",
    },
    {
      img: img2,
      title: "عنوان اصلی مقاله",
      subtitle:
        " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز .... ",
    },
    {
      img: img3,
      title: "عنوان اصلی مقاله",
      subtitle:
        " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز .... ",
    },
    {
      img: img4,
      title: "عنوان اصلی مقاله",
      subtitle:
        " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز .... ",
    },
  ]);
  return (
    <>
      <div className="article">
        <ScrollAnimation
          className="animate__animated"
          animateIn="animate__fadeInRight"
          style={{ animationDuration: "1.5s" }}
        >
          <div className="article_title">
            <h3>آخرین مقالات مجله</h3>
          </div>
          <div className="article_card">
            {state.map((item) => (
              <Card
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default Article;
