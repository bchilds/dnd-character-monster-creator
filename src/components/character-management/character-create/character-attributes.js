import React, { useContext } from 'react';
import CharacterContext from '../../../contexts/character';
import style from './style.module.scss';

const CharacterAttributes = () => {
  const { character, characterActions } = useContext(CharacterContext);
  const { name, race, level, characterClass, subclass } = character;
  const { setName, setRace, setLevel, setCharacterClass, setSubclass } = characterActions;
  return (
    <>
      <div className={style["form-section"]}>
        <label className={style["delete-link"]}>Character Name: </label>
        <input
          className={style["form-control"]}
          type="text"
          value={name}
          onChange={setName}
        />
      </div>
      <div className={style["form-section"]}>
        <label>Race: </label>
        <input
          className={style["form-control"]}
          type="text"
          value={race}
          onChange={setRace}
        />
      </div>
      <div className={style["form-section"]}>
        <label>Level: </label>
        <input
          className={style["form-control"]}
          type="number"
          step="1"
          min="1"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={level}
          onChange={setLevel}
        />
      </div>
      <div className={style["form-section"]}>
        <label>Class: </label>
        <input
          className={style["form-control"]}
          type="text"
          value={characterClass}
          onChange={setCharacterClass}
        />
      </div>
      <div className={style["form-section"]}>
        <label>Subclass (Archetype): </label>
        <input
          className={style["form-control"]}
          type="text"
          value={subclass}
          onChange={setSubclass}
        />
      </div>
    </>
  );
}

export default CharacterAttributes;