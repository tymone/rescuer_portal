import React from 'react';

const DetailsRescuer = ({ rescuer }) => {
  const check = <i className="fas fa-check" style={{ color: 'green', cursor: 'default' }}></i>;
  const uncheck = <i className="fas fa-times" style={{ color: 'red', cursor: 'default' }}></i>;
  return (
    <ul>
      <li>{rescuer.name}</li>
      <li>{rescuer.surname}</li>
      <li>{rescuer.id}</li>
      <li>{rescuer.included.osrg1 ? check : uncheck}</li>
      <li>{rescuer.included.under1 ? check : uncheck}</li>
      <li>{rescuer.included.ground1 ? check : uncheck}</li>
      <li>{rescuer.included.osrg2 ? check : uncheck}</li>
      <li>{rescuer.included.under2 ? check : uncheck}</li>
      <li>{rescuer.included.ground2 ? check : uncheck}</li>
    </ul>
  );
};

export default DetailsRescuer;
