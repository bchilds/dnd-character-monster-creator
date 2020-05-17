import React, { useCallback } from "react";
import styled from "styled-components";

const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;

const UpdateLink = ({ id }) => {
  const handleUpdate = useCallback(
    (e) => {
      e.preventDefault();
      window.location.href = `/character/update/${id}`;
    },
    [id]
  );

  return <Update onClick={handleUpdate}>Update Attributes</Update>;
};

export default UpdateLink;
