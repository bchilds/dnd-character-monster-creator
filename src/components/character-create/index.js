import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import style from "./style.module.scss";

import {
  createNewCharacter,
  editCharacterAttributesById,
} from "../../../src/api/character/api";

const useInput = (fieldName, initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return { onChange, value };
};

const CharacterCreate = ({ existingCharacter }) => {
  const nameProps = useInput("name", existingCharacter?.name || "Name Here");
  const raceProps = useInput("race", existingCharacter?.race || "");
  const levelProps = useInput("level", existingCharacter?.level || 1);
  const characterClassProps = useInput(
    "characterClass",
    existingCharacter?.characterClass || ""
  );
  const subclassProps = useInput("subclass", existingCharacter?.subclass || "");

  const onSubmit = useCallback(() => {
    const doesCharacterExist = !!existingCharacter;
    const body = {
      name: nameProps.value,
      race: raceProps.value,
      level: levelProps.value,
      characterClass: characterClassProps.value,
      subclass: subclassProps.value,
    };

    // validation

    doesCharacterExist
      ? editCharacterAttributesById(existingCharacter._id, body)
      : createNewCharacter(body);
  }, [
    existingCharacter,
    nameProps.value,
    raceProps.value,
    levelProps.value,
    characterClassProps.value,
    subclassProps.value,
  ]);

  return (
    <div className={style["form-group"]}>
      <h1>
        {!!existingCharacter ? `Edit ${nameProps.value}` : "Create A Character"}
      </h1>
      <label className={style["delete-link"]}>Character Name: </label>
      <input
        className={style["form-control"]}
        type="text"
        {...nameProps}
      ></input>
      <label>Race: </label>
      <input
        className={style["form-control"]}
        type="text"
        {...raceProps}
      ></input>
      <label>Level: </label>
      <input
        className={style["form-control"]}
        type="number"
        step="1"
        min="1"
        pattern="[0-9]+([,\.][0-9]+)?"
        {...levelProps}
      ></input>
      <label>Class: </label>
      <input
        className={style["form-control"]}
        type="text"
        {...characterClassProps}
      ></input>
      <label>Subclass (Archetype): </label>
      <input
        className={style["form-control"]}
        type="text"
        {...subclassProps}
      ></input>

      <button className={style["btn-primary"]} onClick={onSubmit}>
        Submit Character
      </button>
      <button className={style["btn-danger"]} href={"/characters/list"}>
        Cancel
      </button>
    </div>
  );
};

CharacterCreate.propTypes = {
  existingCharacter: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    level: PropTypes.number,
    race: PropTypes.string,
    characterClass: PropTypes.string,
    subclass: PropTypes.string,
    // ...rest of model, extract this to its own file
  }),
};

CharacterCreate.defaultProps = {
  existingCharacter: null,
};

export default CharacterCreate;
