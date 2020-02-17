import React from 'react';

const Multitude = ({ details: { time, multitude } }) => {
  const rescuers = (multitude) => {
    return multitude.map((rescuer) => <li key={rescuer}>{rescuer}</li>);
  };
  return (
    <ul>
      {' '}
      <li>{time}</li>
      {rescuers(multitude)}
    </ul>
  );
};

export default Multitude;
