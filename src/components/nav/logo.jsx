// By Dungeons & Dragons, Fair use, https://en.wikipedia.org/w/index.php?curid=51501539
import React from 'react';
import styled from 'styled-components';

import logo from '../../images/dnd_5e_logo.svg';

const Wrapper = styled.a.attrs({
  className: 'navbar-brand'
})

const Logo = () => (
  <Wrapper href="https://dnd.wizards.com/" target="_blank">
    <img src={logo} width="530" height="180" alt="https://dnd.wizards.com/"/>
    By Dungeons & Dragons, Fair use, https://en.wikipedia.org/w/index.php?curid=51501539
  </Wrapper>
);

export default Logo;