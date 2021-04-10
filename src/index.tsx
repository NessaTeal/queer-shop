import React from "react";
import ReactDOM from "react-dom";
import { allFlags } from "./flag/Flag";
import { FlagComponent } from "./flag/FlagComponent";

const App = () => (
  <>
    {allFlags.map((flag, index) => (
      <div key={index} style={{ padding: "4px" }}>
        <FlagComponent flag={flag} />
      </div>
    ))}
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
