import React from 'react';

const NewGroupRow = ({ list, handleChange, addGroup }) => {
  const { osrg1, under1, ground1, osrg2, under2, ground2 } = list;
  return (
    <>
      <ul>
        <li>-</li>
        <li>
          <input type="date" name="osrg1" value={osrg1} onChange={handleChange} />
        </li>
        <li>
          <input type="date" name="under1" value={under1} onChange={handleChange} />
        </li>
        <li>
          <input type="date" name="ground1" value={ground1} onChange={handleChange} />
        </li>
        <li>
          <input type="date" name="osrg2" value={osrg2} onChange={handleChange} />
        </li>
        <li>
          <input type="date" name="under2" value={under2} onChange={handleChange} />
        </li>
        <li>
          <input type="date" name="ground2" value={ground2} onChange={handleChange} />
        </li>
        <li>
          <i className="fas fa-plus" onClick={addGroup}></i>
        </li>
      </ul>
    </>
  );
};

export default NewGroupRow;
