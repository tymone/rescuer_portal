import React from 'react';

const SelectShift = ({ shifts, handleChange }) => {
  return (
    <div className="selectShift">
      <label>
        Wybierz liczbę zmian:
        <select value={shifts} name="shifts" onChange={handleChange}>
          <option value={6}>3 zmiany</option>
          <option value={8}>4 zmiany</option>
          <option value={7}>7 zmian</option>
        </select>
      </label>
    </div>
  );
};

export default SelectShift;
