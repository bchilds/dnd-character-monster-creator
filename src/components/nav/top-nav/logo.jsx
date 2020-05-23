// By Dungeons & Dragons, Fair use, https://en.wikipedia.org/w/index.php?curid=51501539
import React from 'react';
import logo from '../../../images/dnd_5e_logo_opt.svg';
import style from './style.module.scss';

const Logo = () => (
  <div className={style['logo-wrapper']}>
    <a
      href="https://dnd.wizards.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={logo} width="530" height="180" alt="https://dnd.wizards.com/" />
      <span className={style.disclaimer}>
        By Dungeons & Dragons, Fair use,
        https://en.wikipedia.org/w/index.php?curid=51501539
      </span>
    </a>
  </div>
);

export default Logo;