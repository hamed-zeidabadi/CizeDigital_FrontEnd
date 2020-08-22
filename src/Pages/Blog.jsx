import React from "react";
import Navbar from "../Components/Blog/Navbar/Navbar";
import Footer from "./../Components/Blog/Footer/Footer";
import Hero from "./../Components/Blog/Hero/Hero";
import Article from "./../Components/Blog/Article/Article";
const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="blog_nav">
          <Navbar />
        </div>
        <div className="blog_hero">
          <Hero />
        </div>
        <div className="blog_article">
          <Article />
        </div>
        <div className="blog_footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Blog;
