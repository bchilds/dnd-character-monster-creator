import React, { useState, useEffect } from "react";
import CharacterCreate from "../character-create";
import { getCharacterById } from "../../../src/api/character/api";

const CharacterUpdate = (routerProps) => {
  const [character, setCharacter] = useState(null);
  const id = routerProps.match.params.id;
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

  if (character === null) {
    return <div>Loading...</div>;
  }
  return <CharacterCreate existingCharacter={character} />;
};

export default CharacterUpdate;
