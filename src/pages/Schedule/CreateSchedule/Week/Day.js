import React from 'react';

import Multitude from './Multitude';

const Day = ({ day, dayPl, getWeek, multitudeNumber }) => {
  const getDay = newMultitude => {
    const { multitudeName, time, multitude } = newMultitude;
    const setDay = {
      day,
      multitudeName,
      time,
      multitude
    };
    getWeek(setDay);
  };

  const setMultitudes = (multitudeNumbers = 6) => {
    const arr = [];
    for (let i = 0; i < multitudeNumbers; i++) {
      arr.push(`multitude${i + 1}`);
    }
    return arr.map(multitude => <Multitude key={multitude} getMultitude={getDay} multitudeName={multitude} />);
  };

  return (
    <div className="day">
      <p>{dayPl}</p>
      {setMultitudes(multitudeNumber)}
    </div>
  );
};

export default Day;
