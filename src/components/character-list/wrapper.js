import React, { useState, useCallback } from "react";
import { CharacterProvider } from "../../../src/contexts/character-list";
import { getAllCharacters } from "../../api/character/api";
import { emptyArray } from "../../defaults/empty";

const CharacterListWrapper = ({ children }) => {
  const [isLoadingCharacters, setLoadingCharacters] = useState(false);
  const [characters, setCharacters] = useState(emptyArray);

  const setCharacterById = useCallback(
    (id, characterToSet) => {
      const foundCharacterIndex = characters.findIndex(
        (char) => char._id === id
      );
      if (foundCharacterIndex < 0) {
        setCharacters([...characters, characterToSet]);
      }

      setCharacters([
        ...characters.slice(0, foundCharacterIndex),
        characterToSet,
        ...characters.slice(foundCharacterIndex + 1),
      ]);
    },
    [characters, setCharacters]
  );

  const setAllCharacters = useCallback(
    (newCharacters) => {
      setCharacters(newCharacters);
    },
    [setCharacters]
  );

  // below is not handled correctly when used in this way, can cause memory leak
  // "correct" solution is probably to remove API call from context
  const fetchAndSetAllCharacters = useCallback(async () => {
    setLoadingCharacters(true);
    try {
      const res = await getAllCharacters();
      const chars = res.data.data || [];
      setCharacters(chars);
      setLoadingCharacters(false);
    } catch (err) {
      console.error(err);
      setLoadingCharacters(false);
    }
  }, [setLoadingCharacters, setCharacters]);

  const deleteCharacterById = useCallback(
    (id) => {
      const foundCharacterIndex = characters.findIndex(
        (char) => char._id === id
      );
      if (foundCharacterIndex >= 0) {
        setCharacters([
          ...characters.slice(0, foundCharacterIndex),
          ...characters.slice(foundCharacterIndex + 1),
        ]);
      }
    },
    [characters, setCharacters]
  );

  const value = {
    characters,
    isLoadingCharacters,
    setCharacterById,
    setAllCharacters,
    fetchAndSetAllCharacters,
    deleteCharacterById,
  };

  return <CharacterProvider value={value}>{children}</CharacterProvider>;
};

export default CharacterListWrapper;
