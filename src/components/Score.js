import React from "react";

const Score = ({ score }) => {
  return (
    <h3 data-testid="score" style={{ marginTop: "10px" }}>
      Score: {score}
    </h3>
  );
};

export default Score;
