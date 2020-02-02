import React from 'react';
import { Link } from 'react-router-dom';

import Table from './ReadingSchedule/Table';

const Schedule = () => (
  <div className="schedule">
    <div className="options">
      <Link to="/harmonogram/dodaj">
        <i title="Dodaj harmonogram" className="far fa-calendar-plus"></i>
      </Link>
    </div>
    <Table />
  </div>
);

export default Schedule;
