import React from 'react';

import Day from './Day';
import Head from '../Head/Head';
import OutOfSchedule from '../OutOfSchedule/OutOfSchedule';

const Week = (props) => {
  const { schedule, type, getDate, getSchedule, getOutOfSchedule } = props;
  const getWeek = Object.keys(schedule.week);
  const getDay = getWeek.map((day) => (
    <li className="day" key={day}>
      <Day day={schedule.week[day]} dayName={day} type={type} getSchedule={getSchedule} />
    </li>
  ));

  return (
    <>
      <Head type={type} date={schedule.date} getDate={getDate} id={schedule.id} />
      <ul className="table">{getDay}</ul>
      <OutOfSchedule type={type} getOutOfSchedule={getOutOfSchedule} groups={schedule.outOfWeek} />
    </>
  );
};

export default Week;
