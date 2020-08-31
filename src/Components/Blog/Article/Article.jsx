import React from "react";
import "./Article.scss";
import Card from "./Card";
// import ScrollAnimation from "react-animate-on-scroll";

const Article = () => {
  const data = [
    {
      id: 1,
      title: "نسخه ۲۰۰۴ ویندوز ۱۰ به ssd آسیب می‌زند",
      desc:
        "برخی کاربران باگی را در ابزار Optimize Drives ویندوز ۱۰ شناسایی کرده‌اند که می‌تواند بر طول عمر حافظه‌های SSD تأثیر منفی بگذارد.",
      category: "تکنولوژی",
      img: require("../../../Images/Blog/1.jpg"),
      date: "25 آبان 1399",
    },
    {
      id: 2,
      title: "اینتل چطور در سال‌های پیش رو با قانون مور همگام‌ باقی می‌ماند؟",
      desc: "ترانزیستورها در یک چیپ کامپیوتری خواهیم بود",
      category: "تکنولوژی",
      img: require("../../../Images/Blog/2.jpg"),
      date: "26 آبان 1399",
    },
    {
      id: 3,
      title: "شبکه بیت‌کوین حالا به اندازه ۷ نیروگاه هسته‌ای برق مصرف می‌کند",
      desc: "کوین حالا به اندازه هفت نیروگاه هسته‌ای برق مصرف می‌کند.",
      category: "اخبار",
      img: require("../../../Images/Blog/3.jpg"),
      date: "27 آبان 1399",
    },
    {
      id: 4,
      title: "بازی‌های موبایل ایرانی که گرافیک بالایی دارند",
      desc:
        "گرافیک بالا و بازی‌های ایرانی؛ دو کلمه‌ای که شاید تا چند سال گذشته آن‌قدرها کنار هم جور در نمی‌آمدند ولی با پیشرفت",
      category: "سبک زندگی",
      img: require("../../../Images/Blog/4.jpg"),
      date: "28 آبان 1399",
    },
  ];

  return (
    <>
      <div className="article_blog">
        {data
          ? [...data, ...data, ...data].map((items) => (
              <Card
                key={items.id}
                id={items.id}
                title={items.title}
                desc={items.desc}
                category={items.category}
                img={items.img}
                date={items.date}
              />
            ))
          : null}
      </div>
    </>
  );
};

export default Article;
