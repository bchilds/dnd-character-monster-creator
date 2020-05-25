import React from 'react';

import CharacterListWrapper from './wrapper';
import CharacterList from './list';

const WrappedCharacterList = () => (
  <CharacterListWrapper>
    <CharacterList />
  </CharacterListWrapper>
);

export default WrappedCharacterList;