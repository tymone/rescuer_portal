import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { StyledSublink } from '../StyledSidebar';

const Sublinks = ({ parentHref, sublinks }) => (
  <StyledSublink>
    {sublinks.map((sublink) => {
      const { title, href, icon } = sublink;
      return (
        <li key={title}>
          <NavLink to={`${parentHref}/${href}`}>
            <i className={icon} />
            {title}
          </NavLink>
        </li>
      );
    })}
  </StyledSublink>
);

Sublinks.propTypes = {
  parentHref: PropTypes.string,
  sublinks: PropTypes.array,
};

export default Sublinks;
