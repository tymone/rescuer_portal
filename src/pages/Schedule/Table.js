import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/style.css';

import Week from './Week';

const Table = ({ schedule }) => {

  const scheduleTable = schedule.map((week, i) => (
    <li key={i}>
      <h1>
        Harmonogram na okres: {week.dateFrom} - {week.dateTo}<Link to={`/harmonogram/edytuj/${i}`} ><i className="fas fa-edit"></i></Link>
      </h1>
      <Week week={week} />
    </li >
  ));
  return (
    <ul>{scheduleTable}</ul>
  )
};

export default Table;
