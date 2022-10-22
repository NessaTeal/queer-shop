import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createIncompleteFlag } from "./flag/Flag";
import { IncompleteFlagComponent } from "./flag/IncompleteFlagComponent";
import { RainbowFlag } from "./flag/RainbowFlag";
import { increaseSpeed, updateGameState } from "./game-state";
import { generatePerson } from "./person/Person";
import { PersonComponent } from "./person/PersonComponent";

let lastTimestamp = 0;

const App = () => {
  const [gameState, setGameState] = useState({
    person: generatePerson(),
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
    <div style={{ display: "flex" }}>
      <div>
        <div>Money: {gameState.money}</div>
        <button onClick={() => setGameState(increaseSpeed(gameState))}>
          Increase speed (cost 1)
        </button>
        <IncompleteFlagComponent flag={gameState.flag} />
      </div>
      <div style={{ marginLeft: "20px" }}>
        <PersonComponent person={gameState.person} />
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
