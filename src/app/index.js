import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingSpinner from '../components/loading-spinner';
import CharacterContext from '../contexts/character-list';
import { updateCharactersMatch } from './routing-helpers';
import NavBar from '../components/nav/nav-bar';
import Pages from '../components/pages';
import CharacterListWrapper from '../components/character-management/wrapper';

const CharacterContainer = () => {
  const context = useContext(CharacterContext);
  const {
    fetchAllCharacters,
    setAllCharacters,
    isLoadingCharacters,
    setLoadingCharacters,
  } = context;
  useEffect(() => {
    console.log('fetching chars');
    fetchAllCharacters &&
      fetchAllCharacters()
        .then((characters) => {
          console.log('fetched: ', characters);
          setAllCharacters && setAllCharacters(characters);
          setLoadingCharacters && setLoadingCharacters(false);
        })
        .catch((err) => {
          console.error(err);
          setLoadingCharacters && setLoadingCharacters(false);
        });
  }, []);

  if (isLoadingCharacters) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <Route path='/characters/list' exact component={Pages.CharacterList} />
      <Route
        path='/characters/create'
        exact
        component={Pages.CharacterCreate}
      />
      <Route
        path={updateCharactersMatch}
        exact
        component={Pages.CharacterUpdate}
      />
    </>
  );
};

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <CharacterListWrapper>
          <CharacterContainer />
        </CharacterListWrapper>
      </Switch>
      <Switch>
        <Route exact path='/' component={Pages.LandingPage} />{' '}
        {/*this will work for now */}
      </Switch>
    </Router>
  );
}

export default App;
