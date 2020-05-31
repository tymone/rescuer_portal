import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import date from 'helpers/setDate';
import PropTypes from 'prop-types';
import { StyledLi } from './StyledScheduleUpdate';

const ScheduleUpdateList = ({ schedules, history }) => {
  const getSchedulesList = () => {
    if (schedules.length !== 0) {
      return schedules.map((schedule) => (
        <StyledLi key={schedule.id}>
          <Link to={`/harmonogram/${schedule.id}`}>
            {`harmonogram na okres: ${date(schedule.date.from)} - ${date(schedule.date.to)}`}
          </Link>
        </StyledLi>
      ));
    }
    return <p>Brak harmonogramów do edycji lub wystąpił jakiś błąd.</p>;
  };
  return (
    <>
      <h1>Lista harmonogramów</h1>
      <ul>{getSchedulesList(schedules)}</ul>
      <div className="options">
        <i className="fas fa-chevron-left" onClick={history.goBack} />
      </div>
    </>
  );
};

const mapStateToProps = ({ schedules }) => ({
  schedules: schedules.list,
});

ScheduleUpdateList.propTypes = {
  schedules: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.object,
};

export default connect(mapStateToProps)(ScheduleUpdateList);
