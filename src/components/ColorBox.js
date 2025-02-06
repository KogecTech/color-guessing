import React from "react";

const ColorBox = ({ color }) => {
  return (
    <div
      data-testid="colorBox"
      className="color-box"
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: color,
        margin: "20px auto",
        boxShadow: "0px 0px 8px rgba(0,0,0,0.8)",
      }}
    ></div>
  );
};

export default ColorBox;
