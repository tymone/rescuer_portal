import React from 'react';

import Head from '../Head/Head';
import Day from './Day';
import OutOfWeek from '../OutOfWeek/OutOfWeek';

const Week = ({ schedule: { week, date, id, outOfWeek }, shifts, type, handleChange, getSchedule, getOutOfWeek }) => {
  const getDay = (type) => {
    const getWeek = Object.keys(week);
    return getWeek.map((day) => (
      <li className="day" key={day}>
        <Day shift={shifts} dayName={day} type={type} getSchedule={getSchedule} day={week[day]} />
      </li>
    ));
  };

  return (
    <>
      <Head type={type} from={date.from} to={date.to} handleChange={handleChange} id={id} />
      <ul className="table">{getDay(type)}</ul>
      <OutOfWeek type={type} getOutOfWeek={getOutOfWeek} schedule={outOfWeek} />
    </>
  );
};

export default Week;
