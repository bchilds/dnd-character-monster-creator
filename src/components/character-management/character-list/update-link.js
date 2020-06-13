import React, { useCallback } from "react";

import { getUpdateCharacterUrlById } from '../../../app/routing-helpers';

import style from "./style.module.scss";

const UpdateLink = ({ id }) => {
  const handleUpdate = useCallback(
    (e) => {
      e.preventDefault();
      window.location.href = getUpdateCharacterUrlById(id);
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
