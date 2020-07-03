import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledSpan } from './StyledRescuer';

const ListItemRescuer = ({ rescuer }) => {
  const { id, name, surname, branch, minePosition, KSRGPosition } = rescuer;
  return (
    <>
      <StyledSpan>{name}</StyledSpan>
      <StyledSpan>{surname}</StyledSpan>
      <StyledSpan>{branch}</StyledSpan>
      <StyledSpan>{minePosition}</StyledSpan>
      <StyledSpan>{KSRGPosition}</StyledSpan>
      <StyledSpan>
        <Link to={`/druzyna/${id}`}>
          <i className="fas fa-chevron-right" />
        </Link>
      </StyledSpan>
    </>
  );
};

ListItemRescuer.propTypes = {
  rescuer: PropTypes.object,
};

export default ListItemRescuer;
