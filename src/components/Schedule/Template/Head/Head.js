import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle, StyledInput } from './StyledHead';

const Head = () => {
  // const Head = ({ date: { from, to }, type, getDate }) => {
  const formatDate = new Intl.DateTimeFormat('pl', { dateStyle: 'short' });
  return (
    <StyledTitle>
      Harmonogram
      {/* {type === 'read' ? (
        ` ${formatDate.format(new Date(from)).slice(0, 5)} `
      ) : (
        <StyledInput
          type="text"
          onFocus={(e) => (e.target.type = 'date')}
          name="from"
          value={from}
          onChange={(e) => getDate(e.target.name, e.target.value)}
        />
      )}
      do
      {type === 'read' ? (
        ` ${formatDate.format(new Date(to)).slice(0, 5)}`
      ) : (
        <StyledInput
          type="text"
          onFocus={(e) => (e.target.type = 'date')}
          name="to"
          value={to}
          onChange={(e) => getDate(e.target.name, e.target.value)}
        />
      )} */}
    </StyledTitle>
  );
};

Head.propTypes = {
  type: PropTypes.string.isRequired,
  date: PropTypes.object,
  getDate: PropTypes.func,
};

export default Head;
