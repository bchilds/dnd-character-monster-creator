import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/nav/nav-bar";
import Pages from "../components/pages";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/characters/list" exact component={Pages.CharacterList} />
        <Route
          path="/characters/create"
          exact
          component={Pages.CharacterCreate}
        />
        <Route
          path="/characters/update/:id/"
          exact
          component={Pages.CharacterUpdate}
        />
      </Switch>
    </Router>
  );
}

export default App;
