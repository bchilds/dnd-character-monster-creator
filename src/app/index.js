import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { updateCharactersMatch } from "./routing-helpers";
import NavBar from "../components/nav/nav-bar";
import Pages from "../components/pages";
import CharacterListWrapper from "../components/character-management/wrapper";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <CharacterListWrapper>
          <Route
            path="/characters/list"
            exact
            component={Pages.CharacterList}
          />
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
        </CharacterListWrapper>
      </Switch>
    </Router>
  );
}

export default App;
