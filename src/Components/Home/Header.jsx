import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";

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
