import React, { useContext } from "react";
import PropTypes from "prop-types";
import CharacterListContext from "../../../contexts/character-list";
import CharacterCreate from "../character-create";
import { useParams } from "react-router-dom";

const CharacterUpdate = () => {
  const context = useContext(CharacterListContext);
  const { fetchCharacterById } = context;
  const { id } = useParams();
  const character = fetchCharacterById(id);

  return (
    <React.Suspense fallback={<div>Loading Characters...</div>}>
      <CharacterCreate existingCharacter={character} />
    </React.Suspense>
  );
};

CharacterUpdate.propTypes = {
  onCharacterSubmit: PropTypes.func,
};

CharacterUpdate.defaultProps = {
  onCharacterSubmit: null,
};

export default CharacterUpdate;
