import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/style.css';

import Week from './Week';

const Table = ({ schedule }) => {
  console.log((new Date(schedule[0].dateFrom).getMonth()))

  let date = (date) => {
    let day = new Date(date).getDate()
    let month = new Date(date).getMonth() + 1

    return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}`
  }

  const scheduleTable = schedule.map((week, i) => (
    <li key={i}>
      <h1>
        Harmonogram na okres: {date(week.dateFrom)} - {date(week.dateTo)}<Link to={`/harmonogram/edytuj/${i}`} ><i className="fas fa-edit"></i></Link>
      </h1>
      <Week week={week} />
    </li >
  ));
  return (
    <ul>{scheduleTable}</ul>
  )
};

export default Table;
