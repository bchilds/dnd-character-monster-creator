import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "../components/nav/nav-bar";

import "bootstrap/dist/css/bootstrap.min.css";
// fuck bootstrap

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
