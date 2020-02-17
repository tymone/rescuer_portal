import React from 'react';

import Week from './Week';

const Table = ({ schedules }) => {
  const schedulesList = schedules.map((schedule) => (
    <li key={schedule.id}>
      <Week schedule={schedule} />
    </li>
  ));

  return <ul>{schedulesList}</ul>;
};

export default Table;
