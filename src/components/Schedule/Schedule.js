import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ReadingSchedule from './ReadingSchedule/ReadingSchedule';

const Schedule = ({ schedules }) => {
  return (
    <>
      <div className="options">
        <Link to="/harmonogram/dodaj">
          <i title="Dodaj harmonogram" className="far fa-calendar-plus"></i>
        </Link>
      </div>
      <ReadingSchedule schedules={schedules} />
    </>
  );
};

const mapStateToProps = (state) => ({
  schedules: state.schedules.list
});

export default connect(mapStateToProps)(Schedule);
