import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./sass/globals.scss";

ReactDOM.render(
  <React.StrictMode>
    <>
      <CssBaseline />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
