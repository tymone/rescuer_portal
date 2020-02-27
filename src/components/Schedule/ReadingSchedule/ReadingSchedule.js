import React from 'react';

import Week from '../Template/WeekSchedule/Week';

const ReadingSchedule = ({ schedules }) => {
  const schedulesList = schedules.map((schedule) => (
    <li className="schedule" key={schedule.id}>
      <Week type={'read'} schedule={schedule} />
    </li>
  ));

  return <ul>{schedulesList}</ul>;
};

export default ReadingSchedule;
