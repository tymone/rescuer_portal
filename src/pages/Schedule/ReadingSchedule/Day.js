import React from 'react';

import Multitude from './Multitude';

const Day = ({ day, name }) => {
  const getMultitudes = day => {
    const getMultitudesArray = Object.keys(day);

    return getMultitudesArray.map(multitudeName => (
      <Multitude key={multitudeName} multitude={day[multitudeName].multitude} time={day[multitudeName].time} />
    ));
  };
  return (
    <div className="day">
      <p>{name}</p>
      {getMultitudes(day)}
    </div>
  );
};

export default Day;
