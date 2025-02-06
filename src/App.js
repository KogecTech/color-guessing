import React, { useState, useEffect } from "react";
import ColorBox from "./components/ColorBox";
import ColorOptions from "./components/ColorOptions";
import GameStatus from "./components/GameStatus";
import Score from "./components/Score";
import NewGameButton from "./components/NewGameButton";

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

function App() {
  const [targetColor, setTargetColor] = useState("");
  const [options, setOptions] = useState([]);
  const [gameMessage, setGameMessage] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateNewColors();
  }, []);

  const generateNewColors = (resetScore = false) => {
    const correctColor = getRandomColor();
    let colorOptions = new Set([correctColor]);

    while (colorOptions.size < 6) {
      colorOptions.add(getRandomColor());
    }

    // Helper function to shuffle an array
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      }
      return array;
    };
    // shuffle the colors
    const shuffledOptions = shuffleArray([...colorOptions]);

    setTargetColor(correctColor);
    setOptions(shuffledOptions);
    setGameMessage("");

    if (resetScore) {
      setScore(0); // Reset score if the player starts a new game
    }
  };

  

  const handleGuess = (color) => {
    if (color === targetColor) {
      generateNewColors();
      setGameMessage("Correct!");
      setScore(score + 1);
    } else {
      generateNewColors(true);
      setGameMessage("Wrong! Start again.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>GUESS THE COLOR</h1>
      <ColorBox color={targetColor} />
      <Score score={score} />
      <ColorOptions options={options} handleGuess={handleGuess} />
      <GameStatus message={gameMessage} />
      <NewGameButton resetGame={() => generateNewColors(true)} />
    </div>
  );
}

export default App;
