import React from "react";

import Multitude from "./Multitude";

const Day = ({ dayPL, getDay, day, getMultitudes }) => {
  const getMultitude = newMultitude => {
    getMultitudes(newMultitude, day);
  };
  const multitudes = day => {
    const getDayArr = Object.keys(day);

    return getDayArr.map(multitudeName => (
      <Multitude
        key={multitudeName}
        multitude={getDay[multitudeName].multitude}
        multitudeIndex={multitudeName}
        time={getDay[multitudeName].time}
        getMultitude={getMultitude}
      />
    ));
  };
  return (
    <div className="day">
      <p>{dayPL}</p>
      {multitudes(getDay)}
    </div>
  );
};

export default Day;
