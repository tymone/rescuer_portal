import React from 'react';
import setDate from '../../../helpers/setDate';

const DateRow = ({ details }) => {
  const getDate = (details) => {
    const getDateFromArray = Object.keys(details).splice(1);
    return getDateFromArray.map((date) => <li key={date}>{setDate(details[date])}</li>);
  };
  return (
    <div className="dateRow">
      <ul>
        <li>---</li>
        <li>---</li>
        <li>---</li>
        {getDate(details)}
      </ul>
    </div>
  );
};

export default DateRow;
