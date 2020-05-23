import React from "react";
import Logo from "./logo";
import Drawer from "./drawer";
import style from "./style.module.scss";

const NavBar = () => (
  <div className={style.navbar}>
    <Logo />
    <Drawer />
  </div>
);

export default NavBar;
