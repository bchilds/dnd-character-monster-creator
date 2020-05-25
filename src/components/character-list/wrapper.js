import React, { useState, useCallback } from "react";
import { CharacterProvider } from "../../../src/contexts/character-list";
import { getAllCharacters } from "../../api/character/api";
import { emptyArray } from "../../defaults/empty";

const CharacterListWrapper = ({ children }) => {
  const [isLoadingCharacters, setLoadingCharacters] = useState(false);
  const [characters, setCharacters] = useState(emptyArray);

  const setCharacterById = useCallback(
    (characterToSet) => {
      const { _id } = characterToSet;
      const foundCharacterIndex = characters.indexOf(
        (char) => char._id === _id
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

  const fetchAndSetAllCharacters = useCallback(
    async (isSubscribed) => {
      if (!isSubscribed) {
        console.log('Stopping point')
      }
      if (isSubscribed) {
        setLoadingCharacters(true);
      }
      try {
        const res = await getAllCharacters();
        debugger;
        const chars = res.data.data || [];
        if (isSubscribed) {
          setCharacters(chars);
          setLoadingCharacters(false);
        }
      } catch (err) {
        console.error(err);
        if (isSubscribed) {
          setLoadingCharacters(false);
        }
      }
    },
    [setLoadingCharacters, setCharacters]
  );

  const value = {
    characters,
    isLoadingCharacters,
    setCharacterById,
    setAllCharacters,
    fetchAndSetAllCharacters,
  };

  return <CharacterProvider value={value}>{children}</CharacterProvider>;
};

export default CharacterListWrapper;
