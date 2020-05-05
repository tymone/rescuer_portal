import React from 'react';

import Week from '../Template/Table/Week';

const Read = ({ schedules }) => {
  const getSchedulesList = (schedules) => {
    if (schedules.length !== 0) {
      return schedules.map((schedule) => (
        <li className="schedule" key={schedule.id}>
          <Week type={'read'} schedule={schedule} />
        </li>
      ));
    } else {
      return <p>Brak harmonogramu lub wystąpił jakiś błąd.</p>;
    }
  };

  return <ul>{getSchedulesList(schedules)}</ul>;
};

export default Read;
