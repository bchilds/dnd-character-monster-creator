import React, { useCallback } from "react";
import styled from "styled-components";
import { deleteCharacter } from "../../api/character/api";

const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;

const DeleteLink = ({ id }) => {
  const handleDelete = useCallback((e) => {
    if(!window.confirm(`Do you wish to delete ID: ${id} permanently?`)) {
      return;
    }

    deleteCharacter(id)
    .then((response) => {
      // celebrate
      window.location.reload();
    })
    .catch((error) => {
      console.error(`Error deleting charId: ${id}: `, error);
    })
  }, [id]);

  return (
    <Delete onClick={handleDelete}>Delete</Delete>
  );
}

export default DeleteLink;