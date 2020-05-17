import React, { useState, useCallback } from "react";
import PropTypes from 'prop-types';

import {
  createNewCharacter,
  editCharacterAttributesById,
} from "../../../src/api/character/api";

import styled from "styled-components";

const useInput = (fieldName, initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return { onChange, value };
};

const Title = styled.h1.attrs({
  className: 'h1',
})``;

const Wrapper = styled.div.attrs({
  className: 'form-group',
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: 'form-control',
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: 'btn btn-primary',
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.button.attrs({
  className: "btn btn-danger",
})`
  margin: 15px 15px 15px 5px;
`;

const CharacterCreate = ({ existingCharacter }) => {
  const nameProps = useInput('name', existingCharacter?.name || 'Name Here');
  const raceProps = useInput('race', existingCharacter?.race || '');
  const levelProps = useInput('level', existingCharacter?.level || 1);
  const characterClassProps = useInput('characterClass', existingCharacter?.characterClass || '');
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
  }, [existingCharacter, nameProps.value, raceProps.value, levelProps.value, characterClassProps.value, subclassProps.value]);

  return (
    <Wrapper>
      <Title>
        {!!existingCharacter ? `Edit ${nameProps.value}` : "Create A Character"}
      </Title>
      <Label>Character Name: </Label>
      <InputText type="text" {...nameProps}></InputText>
      <Label>Race: </Label>
      <InputText type="text" {...raceProps}></InputText>
      <Label>Level: </Label>
      <InputText
        type="number"
        step="1"
        min="1"
        pattern="[0-9]+([,\.][0-9]+)?"
        {...levelProps}
      ></InputText>
      <Label>Class: </Label>
      <InputText type="text" {...characterClassProps}></InputText>
      <Label>Subclass (Archetype): </Label>
      <InputText type="text" {...subclassProps}></InputText>

      <Button onClick={onSubmit}>Submit Character</Button>
      <CancelButton href={"/characters/list"}>Cancel</CancelButton>
    </Wrapper>
  );
};

CharacterCreate.propTypes = {
  existingCharacter: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    level: PropTypes.string,
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
