import React, { useState } from "react";
import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";
import style from "./style.module.scss";

const CHAR_MGMT = "characterManagement";
const MONS_MGMT = "monsterManagement";
const CREATE_ROUTE = "/characters/create";
const LIST_ROUTE = "/characters/list";
const Links = () => {
  const [selected, setSelected] = useState("characterManagement");
  const location = useLocation().pathname;
  return (
    <div className={style["nav-links-container"]}>
      <div className={style["nav-links"]}>
        <Link
          to="/character-management"
          className={classnames(style["nav-section"], style["nav-link"], {
            [style.selected]: selected === CHAR_MGMT,
          })}
          onClick={() => {
            setSelected(CHAR_MGMT);
          }}
        >
          Character Management
        </Link>
        <Link
          to="/monster-management"
          className={classnames(style["nav-section"], style["nav-link"], {
            [style.selected]: selected === MONS_MGMT,
          })}
          onClick={() => {
            setSelected(MONS_MGMT);
          }}
        >
          Monster Management
        </Link>
      </div>
      {selected === CHAR_MGMT && (
        <div className={style["nav-links"]}>
          <Link
            className={classnames(style["nav-link"], {
              [style.selected]: location === LIST_ROUTE,
            })}
            to={LIST_ROUTE}
          >
            List Characters
          </Link>
          <Link
            className={classnames(style["nav-link"], {
              [style.selected]: location === CREATE_ROUTE,
            })}
            to={CREATE_ROUTE}
          >
            Create Character
          </Link>
        </div>
      )}
    </div>
  );
};

export default Links;
