import React from 'react';
import PropTypes from 'prop-types';
import CharacterCreate from '../character-management/character-create';
import CharacterUpdate from '../character-management/character-update';
import CharacterList from '../character-management/character-list';
import LandingPage from '../landing-page';
import style from './style.module.scss';

const PageWrapper = ({ children }) => {
  return <div className={style['page-wrapper']}>{children}</div>;
};

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default {
  LandingPage: () => (
    <PageWrapper>
      <LandingPage />
    </PageWrapper>
  ),
  CharacterList: () => (
    <PageWrapper>
      <CharacterList />
    </PageWrapper>
  ),
  CharacterCreate: () => (
    <PageWrapper>
      <CharacterCreate />
    </PageWrapper>
  ),
  CharacterUpdate: () => (
    <PageWrapper>
      <CharacterUpdate />
    </PageWrapper>
  ),
};
