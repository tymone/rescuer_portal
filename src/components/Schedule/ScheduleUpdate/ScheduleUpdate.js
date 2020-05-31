import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import actions from '../duck/actions';
import Week from '../Template/Table/Week';

class ScheduleUpdate extends Component {
  state = {
    redirect: false,
    schedule: {
      id: 0,
      date: { from: '', to: '' },
      week: {},
      outOfWeek: {},
    },
  };

  getDate = (date) => {
    const { from, to } = date;
    this.setState((prevState) => ({
      ...prevState,
      schedule: {
        ...prevState.schedule,
        date: {
          from,
          to,
        },
      },
    }));
  };

  getDay = (dayName, shifts) => {
    this.setState((prevState) => ({
      ...prevState,
      schedule: {
        ...prevState.schedule,
        week: {
          ...prevState.schedule.week,
          [dayName]: shifts,
        },
      },
    }));
  };

  getOutOfWeek = (outOfWeek) => {
    this.setState((prevState) => ({
      ...prevState,
      schedule: {
        ...prevState.schedule,
        outOfWeek,
      },
    }));
  };

  handleSubmit = () => {
    const { schedule } = this.state;
    const { update } = this.props;
    update(schedule);
    this.setState({
      redirect: true,
    });
  };

  render() {
    const { redirect } = this.state;
    const {
      schedules,
      history,
      match: {
        params: { id },
      },
    } = this.props;
    if (redirect) {
      return <Redirect to="/harmonogram" />;
    }
    return (
      <>
        <Week
          type="update"
          getDateToSchedule={this.getDate}
          getDayToSchedule={this.getDay}
          getOutOfWeekToSchedule={this.getOutOfWeek}
          schedule={schedules[id]}
        />
        <div className="options">
          <i className="fas fa-chevron-left" onClick={history.goBack} />
          <i className="fas fa-calendar-check" onClick={this.handleSubmit} />
        </div>
      </>
    );
  }
}
const mapStateToProps = ({ schedules }) => ({ schedules: schedules.list });

const mapDispatchToProps = (dispatch) => ({
  update: (updateSchedule) => dispatch(actions.update(updateSchedule)),
});

ScheduleUpdate.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  schedules: PropTypes.array,
  update: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleUpdate);
