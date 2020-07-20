import React from "react";
import "./Header.scss";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";

const Header = () => {
  return (
    <>
      <div className="header_home">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Header;
