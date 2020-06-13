import React, { useState, useEffect, useContext } from "react";
import PropTypes from 'prop-types';
import CharacterListContext from "../../../contexts/character-list";
import CharacterCreate from "../character-create";
import { useParams } from "react-router-dom";

const CharacterUpdate = () => {
  const context = useContext(CharacterListContext);
  const { fetchCharacterById } = context;
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchCharacterById(id)
      .then((res) => {
        const char = res.data.data;
        setCharacter(char);
      })
      .catch((error) => {
        console.error(`Error loading character by ID: ${id}`, error);
      });
  }, [id, setCharacter, fetchCharacterById]);

  return (
    <React.Suspense fallback={<div>Loading Characters...</div>}>
      <CharacterCreate
        existingCharacter={character}
      />
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
