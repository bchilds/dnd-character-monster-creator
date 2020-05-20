import React, { useCallback } from "react";
import style from "./style.module.scss";
import { deleteCharacter } from "../../api/character/api";

const DeleteLink = ({ id }) => {
  const handleDelete = useCallback(
    (e) => {
      if (!window.confirm(`Do you wish to delete ID: ${id} permanently?`)) {
        return;
      }

      deleteCharacter(id)
        .then((response) => {
          // celebrate
          window.location.reload();
        })
        .catch((error) => {
          console.error(`Error deleting charId: ${id}: `, error);
        });
    },
    [id]
  );

  return (
    <div className={style["delete-link"]} onClick={handleDelete}>
      Delete
    </div>
  );
};

export default DeleteLink;
