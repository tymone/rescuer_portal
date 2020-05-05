import React from 'react';

import Shift from './Shift';

const Day = ({ day, dayName, shift, type, getSchedule }) => {
  const getShift = (type) => {
    let multitudes = [];
    if (type !== 'create') {
      multitudes = Object.keys(day);
    } else {
      for (let i = 0; i < shift; i++) {
        multitudes.push(`multitude${i + 1}`);
      }
    }

    return multitudes.map((multitude) => (
      <li key={multitude} className="shift">
        <Shift type={type} getDay={getSchedule} day={dayName} multitudeName={multitude} shift={day[multitude]} />
      </li>
    ));
  };

  const getDayPL = (dayName) => {
    switch (dayName) {
      case 'Monday':
        return 'Poniedziałek';
      case 'Tuesday':
        return 'Wtorek';
      case 'Wednesday':
        return 'Środa';
      case 'Thursday':
        return 'Czwartek';
      case 'Friday':
        return 'Piątek';
      case 'Saturday':
        return 'Sobota';
      case 'Sunday':
        return 'Niedziela';
      default:
        return dayName;
    }
  };

  return (
    <>
      <div className="dayName">{getDayPL(dayName)}</div>
      <ul>{getShift(type)}</ul>
    </>
  );
};

export default Day;
