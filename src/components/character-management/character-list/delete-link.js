import React, { useCallback, useContext } from "react";
import { deleteCharacter } from "../../../api/character/api";
import CharacterContext from "../../../contexts/character-list";

import style from "./style.module.scss";
const DeleteLink = ({ id }) => {
  const context = useContext(CharacterContext);
  const { deleteCharacterById } = context;
  const handleDelete = useCallback(
    (e) => {
      if (!window.confirm(`Do you wish to delete ID: ${id} permanently?`)) {
        return;
      }

      deleteCharacter(id)
        .then((response) => {
          // celebrate
          deleteCharacterById && deleteCharacterById(id);
        })
        .catch((error) => {
          console.error(`Error deleting charId: ${id}: `, error);
        });
    },
    [id, deleteCharacterById]
  );

  return (
    <div className={style["delete-link"]} onClick={handleDelete}>
      Delete
    </div>
  );
};

export default DeleteLink;
