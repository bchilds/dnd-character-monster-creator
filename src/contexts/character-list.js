import { createContext } from "react";
import { emptyArray } from "../defaults/empty";

const CharacterListContext = createContext({
  characters: emptyArray,
  isLoadingCharacters: false,
  setCharacterById: undefined,
  setAllCharacters: undefined,
  fetchAllCharacters: undefined,
  deleteCharacterById: undefined,
});
CharacterListContext.displayName = 'CharacterListContext';

export const CharacterProvider = CharacterListContext.Provider;
export const CharacterConsumer = CharacterListContext.Consumer;
export default CharacterListContext;