import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createIncompleteFlag } from "./flag/Flag";
import { IncompleteFlagComponent } from "./flag/IncompleteFlagComponent";
import { RainbowFlag } from "./flag/RainbowFlag";
import { increaseSpeed, updateGameState } from "./game-state";

let lastTimestamp = 0;

const App = () => {
  const [gameState, setGameState] = useState({
    flag: createIncompleteFlag(RainbowFlag),
    fillSpeed: 0.001,
    money: 0,
  });

  useEffect(() => {
    const gameloop = (timestamp: number) => {
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      setGameState((gameState) => updateGameState(gameState, delta));
      requestAnimationFrame(gameloop);
    };

    requestAnimationFrame(gameloop);
  }, []);

  return (
    <>
      <div>Money: {gameState.money}</div>
      <button onClick={() => setGameState(increaseSpeed(gameState))}>
        Increase speed (cost 1)
      </button>
      <IncompleteFlagComponent flag={gameState.flag} />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
