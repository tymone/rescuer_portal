import React from 'react';
import PropTypes from 'prop-types';

import { links } from './Links';
import { StyledSidebar, StyledUl } from './StyledSidebar';
import { LinkItem } from './components';

const Sidebar = ({ sidebarStatus }) => (
  <StyledSidebar sidebarStatus={sidebarStatus}>
    <nav>
      <StyledUl>
        {links.map((link) => (
          <li key={link.title}>
            <LinkItem link={link} />
          </li>
        ))}
      </StyledUl>
    </nav>
  </StyledSidebar>
);

Sidebar.propTypes = {
  sidebarStatus: PropTypes.bool,
};
export default Sidebar;
