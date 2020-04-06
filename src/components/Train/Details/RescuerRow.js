import React from 'react';

const RescuerRow = ({ details }) => {
  const check = <i className="fas fa-check" style={{ color: 'green', cursor: 'default' }}></i>;
  const uncheck = <i className="fas fa-times" style={{ color: 'red', cursor: 'default' }}></i>;
  return (
    <ul>
      <li>{details.name}</li>
      <li>{details.surname}</li>
      <li>{details.branch}</li>
      <li>{details.included.osrg1 ? check : uncheck}</li>
      <li>{details.included.under1 ? check : uncheck}</li>
      <li>{details.included.ground1 ? check : uncheck}</li>
      <li>{details.included.osrg2 ? check : uncheck}</li>
      <li>{details.included.under2 ? check : uncheck}</li>
      <li>{details.included.ground2 ? check : uncheck}</li>
    </ul>
  );
};

export default RescuerRow;
