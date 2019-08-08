import React from 'react';

import '../../styles/style.css';

import Week from './Week';

const Table = ({ schedule, getEdit }) => {

  const week = schedule.map((week) => (
    <li key={week.id}>
      <h1>
        Harmonogram na okres: {week.dateFrom} - {week.dateTo}<i className="fas fa-edit" onClick={() => getEdit(week.id)}></i>
      </h1>
      <Week week={week} />
    </li>
  ));

  return (
    <ul>{week}</ul>
  )
};

export default Table;
