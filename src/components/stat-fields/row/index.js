import React, { useContext } from "react";
import { emptyObj } from "../../../defaults/empty";
import CharacterContext from "../../character/character-context";
import { getModifier } from "../../character/stats";

// GOOD practice would be to give the row local state for all the stats,
// then validate and set on blur.
const Row = ({ statName }) => {
  const context = useContext(CharacterContext);
  const { character, characterActions } = context;
  const { setCharacterBaseStat } = characterActions;
  const { baseStats, levelStats, additionalStats, race } = character; // race
  const { racialStats = emptyObj } = race; // if no race picked, default to empty obj

  const baseStat = baseStats[statName];
  const racialStat = racialStats[statName] || 0;
  const additionalStat = additionalStats[statName] || 0;
  const levelStat = levelStats[statName] || 0;
  const total = baseStat + racialStat + additionalStat;
  return (
    <React.Fragment>
      <span>{statName}</span>
      <input
        className="base-stat-box"
        value={baseStat}
        type="number"
        onChange={e => {
          const value = e.target.value;
          setCharacterBaseStat(statName, value);
        }}
      />
      <span className="racial-stat-box">{racialStat}</span>
      <input
        className="user-stat-box"
        value={additionalStat}
        onChange={() => {}}
      />
      <input
        className="level-stat-box"
        type="number"
        value={levelStat}
        onChange={() => {}}
      />
      <span>=</span>
      <span className="total-stat-box">{total}</span>
      <span className="mod-box">{getModifier(total)}</span>
    </React.Fragment>
  );
};

export default Row;
