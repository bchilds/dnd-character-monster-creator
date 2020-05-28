import React from "react";

import CharacterListWrapper from "./wrapper";
import CharacterList from "./list";

const WrappedCharacterList = (props) => (
  <CharacterListWrapper {...props} >
    <CharacterList {...props} />
  </CharacterListWrapper>
);

export default WrappedCharacterList;
