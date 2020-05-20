import React, { useCallback } from "react";
import style from "./style.module.scss";

const UpdateLink = ({ id }) => {
  const handleUpdate = useCallback(
    (e) => {
      e.preventDefault();
      window.location.href = `/character/update/${id}`;
    },
    [id]
  );

  return (
    <div className={style["update-link"]} onClick={handleUpdate}>
      Update Attributes
    </div>
  );
};

export default UpdateLink;
