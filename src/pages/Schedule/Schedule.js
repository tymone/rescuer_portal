import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Table from './Table/Table';

const Schedule = ({ schedules }) => {
  return (
    <div className="schedule">
      <div className="options">
        <Link to="/harmonogram/dodaj">
          <i title="Dodaj harmonogram" className="far fa-calendar-plus"></i>
        </Link>
      </div>
      <Table schedules={schedules} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  schedules: state.schedules.list
});

export default connect(mapStateToProps)(Schedule);
