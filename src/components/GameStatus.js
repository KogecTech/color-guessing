import React from "react";

const GameStatus = ({ message }) => {
  return (
    <h2
      data-testid="gameStatus"
      className={message === "Correct!" ? "pulse" : message ? "shake" : ""}
      style={{ marginTop: "20px",  color: message === "Correct!" ? "green" : "red" }}
    >
      {message}
    </h2>
  );
};

export default GameStatus;
