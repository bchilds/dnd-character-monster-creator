import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

// TODO -- styles and classnames for divs

const Links = () => (
  <>
    <Link to="/" className="navbar-brand">
      Character Management
    </Link>
    <div className={style["nav-links"]}>
      <Link to="/characters/list">List Characters</Link>
      <Link to="/characters/create">
        Create Character
      </Link>
    </div>
  </>
);

export default Links;
