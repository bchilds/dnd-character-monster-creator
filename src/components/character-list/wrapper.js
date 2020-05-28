import React, { useState, useCallback } from "react";
import { CharacterListProvider } from "../../../src/contexts/character-list";
import { getAllCharacters } from "../../api/character/api";
import { emptyArray } from "../../defaults/empty";
import { useMountedState } from "../../../src/helpers/use-mounted-state";

const CharacterListWrapper = ({ children }) => {
  const [isLoadingCharacters, setLoadingCharacters] = useState(false);
  const [characters, setCharacters] = useState(emptyArray);
  const isMounted = useMountedState();

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
      isMounted.current && setCharacters(newCharacters);
    },
    [isMounted, setCharacters]
  );

  // below is not handled correctly when used in this way, can cause memory leak
  // "correct" solution is probably to remove API call from context
  const fetchAllCharacters = useCallback(() => {
    isMounted.current && setLoadingCharacters(true);
    return getAllCharacters()
      .then((res) => {
        isMounted.current && setLoadingCharacters(false);
        return res.data.data || [];
      })
      .catch((err) => {
        console.error(err);
        isMounted.current && setLoadingCharacters(false);
      });
  }, [isMounted, setLoadingCharacters]);

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
    fetchAllCharacters,
    deleteCharacterById,
  };

  return (
    <CharacterListProvider value={value}>{children}</CharacterListProvider>
  );
};

export default CharacterListWrapper;
