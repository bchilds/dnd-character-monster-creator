import React from "react";
import PropTypes from "prop-types";

import { MENU_OPTION_MAP } from "./constants";

import style from "./style.module.scss";

const DrawerList = ({ topLevelMenuOption, toggleDrawer, location }) => {
  const Option = MENU_OPTION_MAP[topLevelMenuOption];
  return (
    <div
      className={style.list}
      role="presentation"
      onClick={toggleDrawer(topLevelMenuOption, false)} // executeoptionAction as well
      onKeyDown={toggleDrawer(topLevelMenuOption, false)} // executeoptionAction as well
    >
      <Option location={location} />
    </div>
  );
};

DrawerList.propTypes = {
  topLevelMenuOption: PropTypes.string.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
};

export default DrawerList;
