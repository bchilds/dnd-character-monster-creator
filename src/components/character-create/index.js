import React, { useState } from "react";
import {
  createNewCharacter,
  editCharacterAttributesById,
} from "../../../src/api/character/api";

import styled from "styled-components";

const CharacterCreate = ({ existingCharacter }) => {
  const [attributes, setAttributes] = useState({});

  return (
    <div>
      <p>Character Create will go here</p>
    </div>
  );
};

export default CharacterCreate;
