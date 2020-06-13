import React from "react";
import { Link } from "react-router-dom";
import { getUpdateCharacterUrlById } from "../../../app/routing-helpers";

import style from "./style.module.scss";

const UpdateLink = ({ id }) => (
  <div className={style["update-link"]}>
    <Link to={getUpdateCharacterUrlById(id)}>Update Attributes</Link>
  </div>
);

export default UpdateLink;
