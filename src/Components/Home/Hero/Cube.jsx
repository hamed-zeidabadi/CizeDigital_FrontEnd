import * as React from "react";
import Cube from "react-3d-cube";
import pic1 from "./../../../Images/phone/1.jpg";
import pic2 from "./../../../Images/phone/2.jpg";
import pic3 from "./../../../Images/phone/3.jpg";
import pic4 from "./../../../Images/phone/4.jpg";
import pic5 from "./../../../Images/phone/5.jpg";

const Cube3D = () => {
  return (
    <>
      <h2>set children</h2>
      <div
        style={{
          width: 300,
          height: 300,
        }}
      >
        <Cube size={300} index="front">
          <img src={pic1} alt="front" />
          <img src={pic2} alt="right" />
          <img src={pic3} alt="back" />
          <img src={pic4} alt="left" />
          <img src={pic5} alt="top" />
          <img src={pic2} alt="bottom" />
        </Cube>
      </div>
    </>
  );
};

export default Cube3D;
