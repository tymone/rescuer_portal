import React from 'react';

import Multitude from './Multitude';

const Day = (props) => {
  const { day, dayName, type } = props;
  const getDay = Object.keys(day);
  let dayPL;
  switch (dayName) {
    case 'Monday':
      dayPL = 'Poniedziałek';
      break;
    case 'Tuesday':
      dayPL = 'Wtorek';
      break;
    case 'Wednesday':
      dayPL = 'Środa';
      break;
    case 'Thursday':
      dayPL = 'Czwartek';
      break;
    case 'Friday':
      dayPL = 'Piątek';
      break;
    case 'Saturday':
      dayPL = 'Sobota';
      break;
    case 'Sunday':
      dayPL = 'Niedziela';
      break;
    default:
      dayPL = dayName;
  }
  const getMultitude = (getDay) => {
    return getDay.map((multitude) => (
      <li key={multitude} className="multitude">
        <Multitude details={day[multitude]} type={type} getSchedule={props.getSchedule} day={dayName} multitudeName={multitude} />
      </li>
    ));
  };

  return (
    <>
      <div className="dayName">{dayPL}</div>
      <ul>{getMultitude(getDay)}</ul>
    </>
  );
};

export default Day;
