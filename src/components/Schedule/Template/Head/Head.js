import React from 'react';
import PropTypes from 'prop-types';
import date from 'helpers/setDate';
import { StyledTitle, StyledInput } from './StyledHead';

const Head = ({ type, from, to, handleChange }) => {
  const handleView = (type) => (
    <>
      Harmonogram od
      {type === 'read' ? (
        ` ${date(from)} `
      ) : (
        <StyledInput name="dateFrom" value={from} onChange={handleChange} type="date" />
      )}
      do
      {type === 'read' ? (
        ` ${date(to)}`
      ) : (
        <StyledInput name="dateTo" value={to} onChange={handleChange} type="date" />
      )}
    </>
  );
  return <StyledTitle>{handleView(type)}</StyledTitle>;
};

Head.propTypes = {
  type: PropTypes.string.isRequired,
  from: PropTypes.string,
  to: PropTypes.string,
  handleChange: PropTypes.func,
};
export default Head;
