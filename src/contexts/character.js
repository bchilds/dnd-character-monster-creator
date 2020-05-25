import { createContext } from "react";
import { noop } from "../defaults/noop";
import { emptyObj } from "../defaults/empty";
import stats from "../helpers/stats";
import defaultStrategy from "../defaults/point-strategy"

const defaultNewCharacter = {
  name: "Player",
  level: 1,
  race: "SuperGnome",
  characterClass: "Fighter",
  subclass: "",
  feats: [],
  tools: [],
  languages: ["Common"],
  baseStats: { ...stats },
  levelStats: emptyObj,
  additionalStats: emptyObj
};

const CharacterContext = createContext({
  character: defaultNewCharacter,
  selectedPointsStrategy: defaultStrategy,
  pointsRemaining: defaultStrategy.pointBudget,
  characterActions: {
    setName: noop,
    setLevel: noop,
    setRace: noop,
    setCharacterClass: noop,
    setSubclass: noop,
    setFeats: noop,
    setBaseStat: noop,
    setLevelStats: noop,
    setAdditionalStats: noop,
  },
  setSelectedPointsStrategy: noop,
  setPointsRemaining: noop,
});
export const CharacterProvider = CharacterContext.Provider;
export const CharacterConsumer = CharacterContext.Consumer;
export default CharacterContext;