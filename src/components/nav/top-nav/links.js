import React, { useState } from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/button";

import style from "./style.module.scss";

const CHAR_MGMT = "Character Management";
const MONS_MGMT = "Monster Management";
const CREATE_ROUTE = "/characters/create";
const LIST_ROUTE = "/characters/list";

const MENU_OPTIONS = [CHAR_MGMT, MONS_MGMT];

// TODO determine isMobile from screensize somewhere and make this available, probably in a context
const Links = () => {
  const [selected, setSelected] = useState(MENU_OPTIONS[0]);
  const [menuState, setMenuState] = useState({
    [MENU_OPTIONS[0]]: false,
    [MENU_OPTIONS[1]]: false,
  });
  const location = useLocation().pathname;

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuState({ ...selected, [anchor]: open });
  };

  // if mobile... (let's pretend everything is mobile to start)
  return MENU_OPTIONS.map((anchor) => (
    <React.Fragment key={anchor}>
      <Button
        color={selected === anchor ? "secondary" : "primary"}
        onClick={toggleDrawer(anchor, true)}
      >
        {anchor}
      </Button>
      <SwipeableDrawer
        anchor={anchor}
        open={menuState[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)} //not sure why this set to this in exmaple
      />
    </React.Fragment>
  ));


  // if larger than mobile...
  // return (
  //   <div className={style["nav-links-container"]}>
  //     <div className={style["nav-links"]}>
  //       <Link
  //         to="/character-management"
  //         className={clsx(style["nav-section"], style["nav-link"], {
  //           [style.selected]: selected === CHAR_MGMT,
  //         })}
  //         onClick={() => {
  //           setSelected(CHAR_MGMT);
  //         }}
  //       >
  //         Character Management
  //       </Link>
  //       <Link
  //         to="/monster-management"
  //         className={clsx(style["nav-section"], style["nav-link"], {
  //           [style.selected]: selected === MONS_MGMT,
  //         })}
  //         onClick={() => {
  //           setSelected(MONS_MGMT);
  //         }}
  //       >
  //         Monster Management
  //       </Link>
  //     </div>
  //     {selected === CHAR_MGMT && (
  //       <div className={style["nav-links"]}>
  //         <Link
  //           className={clsx(style["nav-link"], {
  //             [style.selected]: location === LIST_ROUTE,
  //           })}
  //           to={LIST_ROUTE}
  //         >
  //           List Characters
  //         </Link>
  //         <Link
  //           className={clsx(style["nav-link"], {
  //             [style.selected]: location === CREATE_ROUTE,
  //           })}
  //           to={CREATE_ROUTE}
  //         >
  //           Create Character
  //         </Link>
  //       </div>
  //     )}
  //   </div>
  // );
};

export default Links;
