import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeader } from './StyledHeader';

const Header = ({ sidebarStatus, toggle }) => (
  <StyledHeader>
    <i className={`fas fa-${sidebarStatus ? 'outdent' : 'indent'}`} onClick={toggle} />
  </StyledHeader>
);

Header.propTypes = {
  sidebarStatus: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Header;
