import React, { createContext } from "react";
import { noop } from "../defaults/noop";
import { emptyObj } from "../defaults/empty";
import stats from "../defaults/stats";

const defaultNewCharacter = {
  name: "Player",
  level: 1,
  race: "SuperGnome",
  characterClass: "Fighter",
  feats: [],
  baseStats: { ...stats },
  levelStats: emptyObj,
  additionalStats: emptyObj
};

