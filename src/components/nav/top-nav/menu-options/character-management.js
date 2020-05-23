import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@material-ui/core";

import { CREATE_ROUTE, LIST_ROUTE } from "../constants";

import clsx from "clsx";
import style from "../style.module.scss";

const LIST_CHARACTERS = "List Characters";
const CREATE_CHARACTER = "Create Character";
const CharacterManagement = ({ location }) => (
  <List className={style.list}>
    <ListItem key={LIST_CHARACTERS}>
      <Link
        className={clsx(style["nav-link"], {
          [style.selected]: location === LIST_ROUTE,
        })}
        to={LIST_ROUTE}
      >
        <ListItemText primary={LIST_CHARACTERS} />
      </Link>
    </ListItem>
    <ListItem key={CREATE_CHARACTER}>
      <Link
        className={clsx(style["nav-link"], {
          [style.selected]: location === CREATE_ROUTE,
        })}
        to={CREATE_ROUTE}
      >
        <ListItemText primary={CREATE_CHARACTER} />
      </Link>
    </ListItem>
  </List>
);

CharacterManagement.propTypes = {
  location: PropTypes.string.isRequired,
};

export default CharacterManagement;
