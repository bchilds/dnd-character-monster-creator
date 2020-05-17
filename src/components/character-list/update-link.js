import React, { useCallback } from "react";
import styled from "styled-components";
import { editCharacterAttributesById } from "../../api/character/api";

const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;

const UpdateLink = ({ id, attributes }) => {
  const handleUpdate = useCallback(
    (e) => {
      e.preventDefault();
      // window.location.href = "/character/create"

      // validate, OR should use a Router hook to nav to update view?
      // editCharacterAttributesById(id, attributes)
      //   .then((response) => {
      //     // celebrate
      //   })
      //   .catch((error) => {
      //     console.error(
      //       `Error updating charId: ${id}, failed attributes: ${JSON.stringify(
      //         attributes
      //       )}: `,
      //       error
      //     );
      //   });
    },
    [id, attributes]
  );

  return <Update onClick={handleUpdate}>Update Attributes</Update>;
};

export default UpdateLink;
