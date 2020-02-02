import React from 'react';
import { Link } from 'react-router-dom';

import Day from './Day';
import Outside from './Outside';
import date from '../../../helpers/setDate';

const Week = ({ week }) => {
  const { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, outside, dateFrom, dateTo } = week;

  return (
    <div className="scheduleWeek">
      <h1>
        Harmonogram na okres: {date(dateFrom)} - {date(dateTo)}
        <Link key={week.id} to={`/harmonogram/edytuj/${week.id}`}>
          <i title="edytuj harmonogram" className="fas fa-edit"></i>
        </Link>
      </h1>
      <div className="table">
        <Day day={Monday} name="Poniedziałek" />
        <Day day={Tuesday} name="Wtorek" />
        <Day day={Wednesday} name="Środa" />
        <Day day={Thursday} name="Czwartek" />
        <Day day={Friday} name="Piątek" />
        <Day day={Saturday} name="Sobota" />
        <Day day={Sunday} name="Niedziela" />
        <Outside outsideEmployee={outside} />
      </div>
    </div>
  );
};

export default Week;
