import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Collapse = styled.div.attrs({
  className: 'collapse navbar-collapse',
})``;

const List = styled.div.attrs({
  className: 'navbar-nav mr-auto'
})``;

const Item = styled.div.attrs({
  className: 'collapse navbar-collapse'
})``;

const Links = () => (
  <>
    <Link to="/" className="navbar-brand">
      Character Management
    </Link>
    <Collapse>
      <List>
        <Item>
          <Link to="/characters/list" className="nav-link">
            List Characters
          </Link>
        </Item>
        <Item>
          <Link to="/characters/create" className="nav-link">
            Create Character
          </Link>
        </Item>
      </List>
    </Collapse>
  </>
);

export default Links;