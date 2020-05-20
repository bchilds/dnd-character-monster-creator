import React from 'react';
import Logo from './logo';
import Links from './links';
import style from './style.module.scss';

const NavBar = () => (
  <div class={style.navbar}>
    <Logo />
    <Links />
  </div>
);

export default NavBar;