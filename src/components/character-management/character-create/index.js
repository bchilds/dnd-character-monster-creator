import React, { useState, useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import CharacterListContext from "../../../contexts/character-list";
import { useInput } from "../../../hooks/use-input";
import {
  CharacterProvider,
  generateDefaultNewCharacter,
} from "../../../contexts/character";
import CharacterAttributes from "./character-attributes";
import Character from "../../../props/character";
import style from "./style.module.scss";

import {
  createNewCharacter,
  editCharacterAttributesById,
} from "../../../api/character/api";

const CharacterCreate = ({ existingCharacter }) => {
  const context = useContext(CharacterListContext);
  const { setCharacterById } = context;
  const shouldEditExistingCharacter = !!existingCharacter;
  let character = !!existingCharacter
    ? existingCharacter
    : generateDefaultNewCharacter();
  const [submitCount, setSubmitCount] = useState(0);
  const { setName, name } = useInput("name", character?.name);
  const { setRace, race } = useInput("race", character?.race);
  const { setLevel, level } = useInput("level", character?.level);
  const { setCharacterClass, characterClass } = useInput(
    "characterClass",
    character?.characterClass
  );
  const { setSubclass, subclass } = useInput(
    "subclass",
    character?.subclass || ""
  );

  character = {
    ...character,
    name,
    race,
    level,
    characterClass,
    subclass,
  };

  const onResetChanges = useCallback(() => {
    const resetToInitial = (value) => ({ target: { value } });
    setName(resetToInitial(name));
    setRace(resetToInitial(race));
    setLevel(resetToInitial(level));
    setCharacterClass(resetToInitial(characterClass));
    setSubclass(resetToInitial(subclass));
    //eslint-disable-next-line
  }, [submitCount]); //use submitCount as recalc bust

  const onSubmit = useCallback(() => {
    const body = character;

    // validation

    const action = shouldEditExistingCharacter
      ? editCharacterAttributesById(character._id, body)
      : createNewCharacter(body);

    action
      .then((response) => {
        setSubmitCount(submitCount + 1);
        shouldEditExistingCharacter &&
          setCharacterById(character.id, character);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [
    shouldEditExistingCharacter,
    character,
    submitCount,
    setSubmitCount,
    setCharacterById,
  ]);

  const value = {
    character,
    characterActions: {
      setName,
      setLevel,
      setRace,
      setCharacterClass,
      setSubclass,
    },
  };
  return (
    <CharacterProvider value={value}>
      <div className={style["form"]}>
        <h1>
          {!!shouldEditExistingCharacter
            ? `Edit ${name}`
            : "Create A Character"}
        </h1>

        <div className="form-column">
          <CharacterAttributes />
        </div>
        <div className="form-column">{/* stat block */}</div>

        {/* convert to split buttons */}
        <div className={style["action-row"]}>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            onClick={onSubmit}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            onClick={onResetChanges}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            onClick={useHistory().goBack}
          >
            Go Back
          </Button>
        </div>
      </div>
    </CharacterProvider>
  );
};

CharacterCreate.propTypes = {
  existingCharacter: Character,
};

CharacterCreate.defaultProps = {
  existingCharacter: null,
};

export default CharacterCreate;
