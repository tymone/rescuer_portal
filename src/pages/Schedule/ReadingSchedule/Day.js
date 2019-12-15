import React from "react";

import Shift from "./Shift";

const Day = ({ day, name }) => {
  const shifts = day => {
    const getShifts = Object.keys(day);

    return getShifts.map(shift => (
      <Shift key={shift} multitude={day[shift]} shift={day[shift].time} />
    ));
  };

  return (
    <div className={`day ${name}`}>
      <p>{name}</p>
      {shifts(day)}
    </div>
  );
};

export default Day;
