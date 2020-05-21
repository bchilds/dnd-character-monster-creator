import React, { useState } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

const CHAR_MGMT = "characterManagement";
const MONS_MGMT = "monsterManagement";
const Links = () => {
  const [selected, setSelected] = useState("characterManagement");
  return (
    <div className={style["nav-links-container"]}>
      <div className={style["nav-links"]}>
        <Link
          to="/character-management"
          className={classnames(style["nav-section"], style["nav-link"])}
          onClick={() => {
            setSelected(CHAR_MGMT);
          }}
        >
          Character Management
        </Link>
        <Link
          to="/monster-management"
          className={classnames(style["nav-section"], style["nav-link"])}
          onClick={() => {
            setSelected(MONS_MGMT);
          }}
        >
          Monster Management
        </Link>
      </div>
      {selected === CHAR_MGMT && (
        <div className={style["nav-links"]}>
          <Link className={style["nav-link"]} to="/characters/list">
            List Characters
          </Link>
          <Link className={style["nav-link"]} to="/characters/create">
            Create Character
          </Link>
        </div>
      )}
    </div>
  );
};

export default Links;
