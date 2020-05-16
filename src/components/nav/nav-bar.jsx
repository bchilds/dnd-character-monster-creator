import React from 'react';
import styled from 'styled-components';
import Logo from './logo';
import Links from './links';

const Container = styled.div.attrs({
  className: 'container'
})``;

const Nav = styled.div.attrs({
  className:"navbar nav-expand-lg navbar-dark bg-dark"
})
`
  margin-bottom: 20px;
`;

const NavBar = () => (
  <Container>
    <Nav>
      <Logo />
      <Links />
    </Nav>
  </Container>
);

export default NavBar;