import { createContext } from "react";
import { emptyArray } from "../defaults/empty";

const CharacterListContext = createContext({
  characters: emptyArray,
  isLoadingCharacters: false,
  setCharacterById: undefined,
  setAllCharacters: undefined,
  fetchAllCharacters: undefined,
  fetchCharacterById: undefined,
  deleteCharacterById: undefined,
});
CharacterListContext.displayName = "CharacterListContext";

export const CharacterListProvider = CharacterListContext.Provider;
export const CharacterListConsumer = CharacterListContext.Consumer;
export default CharacterListContext;
