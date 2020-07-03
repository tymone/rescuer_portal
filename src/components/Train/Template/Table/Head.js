import React from 'react';
import PropTypes from 'prop-types';

import { StyledHead } from 'components/Train/StyledTrain';

const Head = ({ type }) => (
  <StyledHead>
    {type === 'details' ? (
      <>
        <li>Imię</li>
        <li>Nazwisko</li>
      </>
    ) : (
      <li>Grupa</li>
    )}
    <li>OSRG 1</li>
    <li>Dołowe 1</li>
    <li>Powierzchnia 1</li>
    <li>OSRG 2</li>
    <li>Dołowe 2</li>
    <li>Powierzchnia 2</li>
    {type === 'read' ? <li>Szczegóły</li> : null}
    {type === 'create' ? <li>Opcje</li> : null}
    {type === 'details' ? <li>Szczegóły</li> : null}
  </StyledHead>
);

Head.propTypes = {
  type: PropTypes.string,
};

export default Head;
