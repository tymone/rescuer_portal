import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from 'components/Train/StyledTrain';

const Element = ({ type, value, inputType, inputName, inputValue, handleChange, id }) => {
  const check = <i className="fas fa-check" style={{ color: 'green', cursor: 'default' }} />;
  const uncheck = <i className="fas fa-times" style={{ color: 'red', cursor: 'default' }} />;
  if (type === 'read') {
    const boolValue = value === true ? check : uncheck;
    return <li>{typeof value === 'boolean' ? boolValue : value}</li>;
  }
  if (type === 'create') {
    return (
      <li>
        <StyledInput type={inputType} name={inputName} value={inputValue} onChange={handleChange} />
      </li>
    );
  }
  if (type === 'update') {
    return (
      <li>
        <StyledInput
          type={inputType}
          name={inputName}
          value={inputValue}
          id={id}
          onChange={(e) => handleChange(e.target.id, e.target.name, e.target.value)}
        />
      </li>
    );
  }
  return <p>element</p>;
};

Element.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  inputValue: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Element;
