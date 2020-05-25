import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Week from 'components/Schedule/Template/Table/Week';
import { StyledSchedule } from './StyledScheduleRead';

const ScheduleRead = ({ schedules }) => {
  const getSchedulesList = (schedules) => {
    if (schedules.length !== 0) {
      return schedules.map((schedule) => (
        <StyledSchedule key={schedule.id}>
          <Week type="read" schedule={schedule} />
        </StyledSchedule>
      ));
    }
    return <p>Brak listy harmonogramów lub wystąpił jakiś błąd.</p>;
  };

  return <ul>{getSchedulesList(schedules)}</ul>;
};

ScheduleRead.propTypes = {
  schedules: PropTypes.arrayOf(PropTypes.object),
};

ScheduleRead.defaultProps = {
  schedules: [],
};

const mapStateToProps = ({ schedules }) => ({ schedules: schedules.list });

export default connect(mapStateToProps)(ScheduleRead);
