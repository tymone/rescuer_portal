import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import actions from 'data/actions/schedule.actions';
import Week from '../Template/Table/Week';

class ScheduleCreate extends Component {
  state = {
    redirect: false,
    schedule: {
      id: '',
      date: { from: '', to: '' },
      week: {
        Monday: {},
        Tuesday: {},
        Wednesday: {},
        Thursday: {},
        Friday: {},
        Saturday: {},
        Sunday: {},
      },
      outOfWeek: {
        train: [],
        sick: [],
        course: [],
        leave: [],
      },
    },
  };

  componentDidMount() {
    let { counter } = this.props;
    this.setState((prevState) => ({
      ...prevState,
      schedule: {
        ...prevState.schedule,
        id: (counter += 1),
      },
    }));
  }

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

  handleSubmit = (e) => {
    e.preventDefault();
    const { redirect, schedule } = this.state;
    const { add } = this.props;
    add(schedule);
    this.setState({
      redirect: !redirect,
    });
  };

  render() {
    const { redirect, schedule } = this.state;
    const { history } = this.props;
    if (redirect) {
      return <Redirect to="/harmonogram" />;
    }
    return (
      <>
        <Week
          type="create"
          getDateToSchedule={this.getDate}
          getDayToSchedule={this.getDay}
          getOutOfWeekToSchedule={this.getOutOfWeek}
          schedule={schedule}
        />
        <div className="options">
          <i className="fas fa-chevron-left" onClick={history.goBack} />
          <i className="fas fa-calendar-check" onClick={this.handleSubmit} />
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ schedules: { counter } }) => ({ counter });
const mapDispatchToProps = (dispatch) => ({
  add: (newSchedule) => dispatch(actions.add(newSchedule)),
});

ScheduleCreate.propTypes = {
  history: PropTypes.object,
  counter: PropTypes.number.isRequired,
  add: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleCreate);
