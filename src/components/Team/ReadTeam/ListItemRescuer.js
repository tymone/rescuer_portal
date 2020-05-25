import React from 'react';
import { Link } from 'react-router-dom';

import { StyledLi, StyledSpan } from './StyledReadTeam';

const ListItemRescuer = ({ rescuer }) => {
  const { id, name, surname, branch, minePosition, KSRGPosition } = rescuer;
  return (
    <StyledLi>
      <StyledSpan>{name}</StyledSpan>
      <StyledSpan>{surname}</StyledSpan>
      <StyledSpan>{branch}</StyledSpan>
      <StyledSpan>{minePosition}</StyledSpan>
      <StyledSpan>{KSRGPosition}</StyledSpan>
      <StyledSpan>
        <Link to={`/druzyna/${id}`}>
          <i className="fas fa-bars"></i>
        </Link>
      </StyledSpan>
    </StyledLi>
  );
};

export default ListItemRescuer;
