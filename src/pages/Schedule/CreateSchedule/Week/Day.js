import React from "react";

import Multitude from "./Multitude";

const Day = ({ day, dayPl, getWeek }) => {
  const getDay = newSchedule => {
    newSchedule.day = day;
    newSchedule.multitude = getWeek(newSchedule);
  };
  return (
    <div className={`day ${day}`}>
      <p>{`${dayPl}`}</p>
      <Multitude getMultitude={getDay} multitudeName={"multitude1"} />
      <Multitude getMultitude={getDay} multitudeName={"multitude2"} />
      <Multitude getMultitude={getDay} multitudeName={"multitude3"} />
      <Multitude getMultitude={getDay} multitudeName={"multitude4"} />
      <Multitude getMultitude={getDay} multitudeName={"multitude5"} />
      <Multitude getMultitude={getDay} multitudeName={"multitude6"} />
    </div>
  );
};

export default Day;
