import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharacterContext from "../contexts/character-list";
import { updateCharactersMatch } from "./routing-helpers";
import NavBar from "../components/nav/nav-bar";
import Pages from "../components/pages";
import CharacterListWrapper from "../components/character-management/wrapper";

const CharacterContainer = ({ children }) => {
  const context = useContext(CharacterContext);
  const { fetchAllCharacters, setAllCharacters } = context;
  useEffect(() => {
    fetchAllCharacters &&
      fetchAllCharacters().then((characters) => {
        setAllCharacters && setAllCharacters(characters);
      });
  }, [setAllCharacters, fetchAllCharacters]);

  return <>{children}</>
}

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <CharacterListWrapper>
          <CharacterContainer>
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
          </CharacterContainer>
        </CharacterListWrapper>
      </Switch>
    </Router>
  );
}

export default App;
