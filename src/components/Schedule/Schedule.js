import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Read from './Read/Read';

const Schedule = ({ schedules }) => {
  return (
    <>
      <div className="options">
        <Link to="/harmonogram/dodaj">
          <i title="Dodaj harmonogram" className="far fa-calendar-plus"></i>
        </Link>
      </div>
      <Read schedules={schedules} />
    </>
  );
};

const mapStateToProps = ({ schedules }) => ({
  schedules: schedules.list
});

export default connect(mapStateToProps)(Schedule);
