import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div className="p_404">
        404 Not Found Pages
        <br />
        <Link to="/">HOME</Link>
      </div>
    </>
  );
};

export default NotFound;
