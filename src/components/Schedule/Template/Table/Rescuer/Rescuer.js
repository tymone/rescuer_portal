import React from 'react';
import PropTypes from 'prop-types';

import { StyledRescuer, StyledInput } from './StyledRescuer';

const Rescuer = ({ name, value, handleChange, type }) => (
  <StyledRescuer>
    {type === 'read' ? (
      name
    ) : (
      <>
        <StyledInput type="text" value={value} name={name} onChange={handleChange} />
      </>
    )}
  </StyledRescuer>
);

Rescuer.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

Rescuer.defaultProps = {};
export default Rescuer;
