import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { updateCharactersMatch } from './routing-helpers';
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
          path={updateCharactersMatch}
          exact
          component={Pages.CharacterUpdate}
        />
      </Switch>
    </Router>
  );
}

export default App;
