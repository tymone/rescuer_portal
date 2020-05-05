import React, { Component } from 'react';
import { connect } from 'react-redux';

import Week from './Week';

class Form extends Component {
  state = {
    id: '',
    dateFrom: '',
    dateTo: '',
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
  };

  componentWillMount() {
    const { type } = this.props;
    if (type === 'update') {
      const { schedule } = this.props;
      this.setState({
        id: schedule.id,
        dateFrom: schedule.date.from,
        dateTo: schedule.date.to,
        week: schedule.week,
        outOfWeek: schedule.outOfWeek,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { getSchedule } = this.props;
    if (this.state !== prevState) {
      const { id, dateFrom, dateTo, week, outOfWeek } = this.state;
      const schedule = {
        id,
        date: {
          from: dateFrom,
          to: dateTo,
        },
        week,
        outOfWeek,
      };
      getSchedule(schedule);
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getSchedule = ({ day, multitudeName, time, multitude, overMultitude }) => {
    let { type, counter, schedule } = this.props;
    let id;
    type === 'create' ? (id = ++counter) : (id = schedule.id);
    this.setState((prevState) => ({
      ...prevState,
      id,
      week: {
        ...prevState.week,
        [day]: {
          ...prevState.week[day],
          [multitudeName]: {
            ...prevState.week[day][multitudeName],
            time,
            multitude,
            overMultitude,
          },
        },
      },
    }));
  };

  getOutOfWeek = (list) => {
    this.setState((prevState) => ({
      ...prevState,
      outOfWeek: list,
    }));
  };

  render() {
    const { week, dateFrom, dateTo, outOfWeek } = this.state;
    const { type, shifts } = this.props;
    const schedule = { week, date: { dateFrom, dateTo }, outOfWeek };
    return (
      <>
        <div className="schedule">
          <Week
            type={type}
            schedule={schedule}
            handleChange={this.handleChange}
            shifts={shifts}
            getSchedule={this.getSchedule}
            getOutOfWeek={this.getOutOfWeek}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ schedules: { counter } }) => ({ counter });

export default connect(mapStateToProps)(Form);
