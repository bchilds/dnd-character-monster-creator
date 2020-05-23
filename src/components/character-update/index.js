import React, { useState, useEffect } from "react";
import CharacterCreate from "../character-create";
import { getCharacterById } from "../../api/character/api";
import { useParams } from "react-router-dom";

const CharacterUpdate = () => {
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

  if (character === null) {
    return <div>Loading...</div>;
  }
  return <CharacterCreate existingCharacter={character} />;
};

export default CharacterUpdate;
