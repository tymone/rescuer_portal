import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import { Redirect } from 'react-router';

import Week from './WeekSchedule/Week';

class UpdateForm extends Component {
  state = {
    activeSubmitButton: false,
    redirect: false,
    schedule: {}
  };

  componentWillMount() {
    const { schedule } = this.props;
    this.setState({
      schedule
    });
  }

  getDate = (from, to) => {
    this.setState((prevState) => ({
      schedule: {
        ...prevState.schedule,
        date: {
          from,
          to
        }
      }
    }));
  };

  getSchedule = (schedule) => {
    const { day, multitudeName, time, multitude } = schedule;

    this.setState((prevState) => ({
      schedule: {
        ...prevState.schedule,
        week: {
          ...prevState.schedule.week,
          [day]: {
            ...prevState.schedule.week[day],
            [multitudeName]: {
              time,
              multitude
            }
          }
        }
      },
      activeSubmitButton: true
    }));
  };

  getOutOfSchedule = (outOfWeek) => {
    const { title, list } = outOfWeek;
    this.setState((prevState) => ({
      schedule: {
        ...prevState.schedule,
        outOfWeek: {
          ...prevState.schedule.outOfWeek,
          [title]: list
        }
      },
      activeSubmitButton: true
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { add, update, type } = this.props;
    const { id, date, week, outOfWeek, redirect } = this.state.schedule;
    const newSchedule = {
      id,
      date,
      week,
      outOfWeek
    };
    if (type === 'create') {
      let { id } = this.props;
      newSchedule.id = ++id;

      add(newSchedule);
    } else if (type === 'update') {
      update(newSchedule);
    }
    this.setState({
      redirect: !redirect
    });
  };

  render() {
    const { redirect, activeSubmitButton } = this.state;
    const { history, type, schedule } = this.props;
    if (redirect) {
      return <Redirect to="/harmonogram" />;
    }
    return (
      <div className="schedule">
        <Week
          type={type}
          getDate={this.getDate}
          getSchedule={this.getSchedule}
          getOutOfSchedule={this.getOutOfSchedule}
          schedule={schedule}
        />
        <div className="options">
          <i className="fas fa-chevron-left" onClick={history.goBack}></i>
          {activeSubmitButton ? <i className="fas fa-calendar-check" onClick={this.handleSubmit}></i> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.schedules.counter
});

const mapDispatchToProps = (dispatch) => ({
  add: (newSchedule) => dispatch(actions.add(newSchedule)),
  update: (newSchedule) => dispatch(actions.update(newSchedule))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
