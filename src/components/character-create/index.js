import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

import Character from "../../props/character";
import style from "./style.module.scss";

import {
  createNewCharacter,
  editCharacterAttributesById,
} from "../../api/character/api";

const useInput = (fieldName, initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return { onChange, value };
};

const CharacterCreate = ({ existingCharacter }) => {
  const history = useHistory();
  const nameProps = useInput("name", existingCharacter?.name || "Name Here");
  const raceProps = useInput("race", existingCharacter?.race || "");
  const levelProps = useInput("level", existingCharacter?.level || 1);
  const characterClassProps = useInput(
    "characterClass",
    existingCharacter?.characterClass || ""
  );
  const subclassProps = useInput("subclass", existingCharacter?.subclass || "");

  const onResetChanges = useCallback(() => {
    const resetToInitial = (value) => ({ target: { value } });
    nameProps.onChange(resetToInitial(nameProps.value));
    raceProps.onChange(resetToInitial(raceProps.value));
    levelProps.onChange(resetToInitial(levelProps.value));
    characterClassProps.onChange(resetToInitial(characterClassProps.value));
    subclassProps.onChange(resetToInitial(subclassProps.value));
    //eslint-disable-next-line
  }, []);

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

  // redo as grid, not flexbox
  return (
    <div className={style["form"]}>
      <h1>
        {!!existingCharacter ? `Edit ${nameProps.value}` : "Create A Character"}
      </h1>

      <div className="form-column">
        <div className={style["form-section"]}>
          <label className={style["delete-link"]}>Character Name: </label>
          <input className={style["form-control"]} type="text" {...nameProps} />
        </div>
        <div className={style["form-section"]}>
          <label>Race: </label>
          <input className={style["form-control"]} type="text" {...raceProps} />
        </div>
        <div className={style["form-section"]}>
          <label>Level: </label>
          <input
            className={style["form-control"]}
            type="number"
            step="1"
            min="1"
            pattern="[0-9]+([,\.][0-9]+)?"
            {...levelProps}
          />
        </div>
        <div className={style["form-section"]}>
          <label>Class: </label>
          <input
            className={style["form-control"]}
            type="text"
            {...characterClassProps}
          />
        </div>
        <div className={style["form-section"]}>
          <label>Subclass (Archetype): </label>
          <input
            className={style["form-control"]}
            type="text"
            {...subclassProps}
          />
        </div>
      </div>

      <div className="form-column">
      </div>

      <div className={style["action-row"]}>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Submit
        </Button>
        <Button variant="contained" color="primary" onClick={onResetChanges}>
          Reset
        </Button>
        <Button variant="contained" color="primary" onClick={history.goBack}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

CharacterCreate.propTypes = {
  existingCharacter: Character,
};

CharacterCreate.defaultProps = {
  existingCharacter: null,
};

export default CharacterCreate;
