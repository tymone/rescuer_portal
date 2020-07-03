import React from 'react';
import PropTypes from 'prop-types';

import { StyledTable, StyledHead, StyledLi } from './StyledTable';

import { ListItemRescuer } from '../Rescuer';

const Table = ({ team }) => (
  <StyledTable>
    <StyledHead>
      <li>Imię</li>
      <li>Nazwisko</li>
      <li>Oddział</li>
      <li>Stanowisko</li>
      <li>Funkcja KSRG</li>
      <li>Szczegóły</li>
    </StyledHead>
    <ul>
      {team.map((rescuer) => (
        <StyledLi key={rescuer.id}>
          <ListItemRescuer rescuer={rescuer} />
        </StyledLi>
      ))}
    </ul>
  </StyledTable>
);

Table.propTypes = {
  team: PropTypes.array,
};

export default Table;
