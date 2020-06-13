import { createContext } from "react";
import { emptyObject } from "../defaults/empty";
import stats from "../helpers/stats";
import defaultStrategy from "../defaults/point-strategy";

export const generateDefaultNewCharacter = () => ({
  _id: undefined,
  name: "Player",
  level: 1,
  race: "",
  characterClass: "",
  subclass: "",
  feats: [],
  tools: [],
  languages: ["Common"],
  baseStats: { ...stats },
  levelStats: emptyObject,
  additionalStats: emptyObject,
});

const CharacterContext = createContext({
  character: emptyObject,
  selectedPointsStrategy: defaultStrategy,
  pointsRemaining: defaultStrategy.pointBudget,
  characterActions: {
    setName: undefined,
    setLevel: undefined,
    setRace: undefined,
    setCharacterClass: undefined,
    setSubclass: undefined,
    setFeats: undefined,
    setBaseStat: undefined,
    setLevelStats: undefined,
    setAdditionalStats: undefined,
  },
  setSelectedPointsStrategy: undefined,
  setPointsRemaining: undefined,
});
export const CharacterProvider = CharacterContext.Provider;
export const CharacterConsumer = CharacterContext.Consumer;
export default CharacterContext;
