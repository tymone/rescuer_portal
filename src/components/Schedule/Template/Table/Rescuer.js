import React from 'react';

const Rescuer = ({ type, value, name, handleChange }) => {
  return (
    <li className="rescuer">
      {type !== 'read' ? (
        <input type="text" placeholder="nazwisko" value={value} name={name} onChange={handleChange} />
      ) : (
        name
      )}
    </li>
  );
};

export default Rescuer;
