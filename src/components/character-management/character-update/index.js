import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import CharacterCreate from "../character-create";
import { getCharacterById } from "../../../api/character/api";
import { useParams } from "react-router-dom";

const CharacterUpdate = ({ onCharacterSubmit }) => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getCharacterById(id)
      .then((res) => {
        const char = res.data.data;
        setCharacter(char);
      })
      .catch((error) => {
        console.error(`Error loading character by ID: ${id}`, error);
      });
  }, [id, setCharacter]);

  return (
    <React.Suspense fallback={<div>Loading Characters...</div>}>
      <CharacterCreate
        existingCharacter={character}
        onCharacterSubmit={onCharacterSubmit}
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
