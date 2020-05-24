import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, SwipeableDrawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { MENU_OPTIONS, MENU_OPTION_ROUTES } from "./constants";

import DrawerList from "./drawer-list";

import style from "./style.module.scss";

const ANCHOR_DIRECTION = "left";
// TODO determine isMobile from screensize somewhere and make this available, probably in a context

// I hate this, but use their system for now
const paperOverrides = makeStyles({
  root: {
    color: "#fffef7",
    background: "#707d8a",
  },
});

const reducer = (acc, curr) => {
  acc[curr] = false;
  return acc;
};
const Drawer = () => {
  const [menuState, setMenuState] = useState(MENU_OPTIONS.reduce(reducer, {}));
  const location = useLocation().pathname;
  const toggleDrawer = (topLevelMenuOption, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuState({ ...menuState, [topLevelMenuOption]: open });
  };

  const paperStyles = paperOverrides();

  // if mobile... (let's pretend everything is mobile to start)
  return (
    <div className={style['top-bar']}>
      {MENU_OPTIONS.map((topLevelMenuOption) => (
        <React.Fragment key={topLevelMenuOption}>
          <Button
            color={"primary"}
            onClick={toggleDrawer(topLevelMenuOption, true)}
            variant={location.startsWith(MENU_OPTION_ROUTES[topLevelMenuOption]) ? "contained" : "outlined"}
          >
            {topLevelMenuOption}
          </Button>
          <SwipeableDrawer
            anchor={ANCHOR_DIRECTION}
            open={menuState[topLevelMenuOption]}
            onClose={toggleDrawer(topLevelMenuOption, false)}
            onOpen={toggleDrawer(topLevelMenuOption, true)}
            PaperProps={{ classes: paperStyles }}
          >
            <DrawerList
              topLevelMenuOption={topLevelMenuOption}
              toggleDrawer={toggleDrawer}
              location={location}
            />
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
  // if larger than mobile...
};

export default Drawer;
