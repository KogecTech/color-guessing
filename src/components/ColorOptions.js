import React from "react";

const ColorOptions = ({ options, handleGuess }) => {
  return (
    <div className="color-options" style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
      {options.map((color, index) => (
        <button
          key={index}
          className="color-option"
          data-testid="colorOption"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: color,
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onClick={() => handleGuess(color)}
        ></button>
      ))}
    </div>
  );
};

export default ColorOptions;
