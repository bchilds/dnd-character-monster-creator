import React, { useState, useCallback } from "react";
import { CharacterListProvider } from "../../contexts/character-list";
import { getAllCharacters } from "../../api/character/api";
import { emptyArray } from "../../defaults/empty";
import { useMountedState } from "../../helpers/use-mounted-state";

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

  const fetchAllCharacters = useCallback(() => {
    isMounted.current && setLoadingCharacters(true);
    return getAllCharacters()
      .then((res) => {
        isMounted.current && setLoadingCharacters(false);
        const chars = res.data.data || [];
        return chars;
      })
      .catch((err) => {
        console.error(err);
        isMounted.current && setLoadingCharacters(false);
      });
  }, [isMounted, setLoadingCharacters, setAllCharacters]);

  const fetchCharacterById = useCallback(
    (id) => {
      debugger;
      return characters.find((char) => char._id === id);
    },
    [characters]
  );

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
    fetchCharacterById,
  };

  return (
    <CharacterListProvider value={value}>{children}</CharacterListProvider>
  );
};

export default CharacterListWrapper;
