import React from "react";
import ReactDOM from "react-dom";
import { FlagComponent } from "./flag/FlagComponent";
import { RainbowFlag } from "./flag/RainbowFlag";

const App = () => <FlagComponent flag={RainbowFlag} />;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
