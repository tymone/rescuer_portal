import React from 'react';

import Multitude from './Multitude';
import CreateMultitude from '../CreateSchedule/CreateMultitude';

const Day = (props) => {
  const { day, type } = props;
  let [setDay] = Object.keys(day);
  let dayPL;
  switch (setDay) {
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
      dayPL = setDay;
  }
  const getMultitude = (day) => {
    return day[setDay].map((multitude) => (
      <li key={Object.keys(multitude)} className="multitude">
        {type === 'create' ? (
          <CreateMultitude getSchedule={props.getSchedule} day={setDay} multitudeName={Object.keys(multitude)[0]} />
        ) : (
          <Multitude details={multitude[Object.keys(multitude)]} />
        )}
      </li>
    ));
  };

  return (
    <div className="day">
      <div className="dayName">{dayPL}</div>
      <ul>{getMultitude(day)}</ul>
    </div>
  );
};

export default Day;
