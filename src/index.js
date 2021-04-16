import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Chair from "./Chair";
import Pinacle from "./components/Pinacle";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Chair/> */}
    <Pinacle />
  </React.StrictMode>,
  document.getElementById("root")
);
