import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createIncompleteFlag, updateIncompleteFlag } from "./flag/Flag";
import { IncompleteFlagComponent } from "./flag/IncompleteFlagComponent";
import { RainbowFlag } from "./flag/RainbowFlag";

let lastTimestamp = 0;

const App = () => {
  const [flag, setFlag] = useState(createIncompleteFlag(RainbowFlag));

  useEffect(() => {
    const gameloop = (timestamp: number) => {
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      setFlag((flag) => updateIncompleteFlag(flag, delta));
      requestAnimationFrame(gameloop);
    };

    requestAnimationFrame(gameloop);
  }, []);

  return <IncompleteFlagComponent flag={flag} />;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
