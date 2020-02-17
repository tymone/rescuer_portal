import React from 'react';

import Day from './Day';

const Week = (props) => {
  const { schedule, type } = props;
  const getDay = schedule.week.map((day) => (
    <li key={Object.keys(day)}>
      <Day day={day} type={type} getSchedule={type === 'create' ? props.getSchedule : null} />
    </li>
  ));

  return (
    <>
      {props.fromCreateSchedule ? null : (
        <div className="title">
          Harmonogram od {schedule.date.from} do {schedule.date.to}
        </div>
      )}
      <ul className="table">{getDay}</ul>
    </>
  );
};

export default Week;
