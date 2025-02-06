import React from "react";

const NewGameButton = ({ resetGame }) => {
  return (
    <button
      data-testid="newGameButton"
      onClick={resetGame}
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        border: "none",
        borderRadius: "5px",
      }}
    >
      New Game
    </button>
  );
};

export default NewGameButton;
