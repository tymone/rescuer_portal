import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Head from '../Template/Head';
import Calendar from '../Template/TempTable/calendar';

const tempData = {
  id: 0,
  date: '2021-05-03',
  schedule: [
    {
      shift: '6:30',
      multitude: ['ratownik1', 'ratownik2', 'ratownik3', 'ratownik4', 'zastępowy5'],
      overMultitude: ['ratownik1', 'ratownik2'],
    },
  ],
};

const ScheduleRead = () => {
  const getScheduleCalendar = () => {
    if (Object.keys(tempData).length > 0) {
      return (
        <>
          <Head type="read" />
          <Calendar schedule={tempData} />
        </>
      );
    }
    return <p>brak harmonogramu</p>;
  };
  return getScheduleCalendar();
};
ScheduleRead.propTypes = {
  schedules: PropTypes.arrayOf(PropTypes.object),
};

ScheduleRead.defaultProps = {
  schedules: [],
};

const mapStateToProps = ({ schedules }) => ({ schedules: schedules.list });

export default connect(mapStateToProps)(ScheduleRead);
