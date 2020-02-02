import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import { Redirect } from 'react-router-dom';

import Week from './Week.js';
import UnderTable from './UnderTable.js';

class Table extends Component {
  state = {
    redirect: false,
    id: '',
    schedule: {}
  };

  componentWillMount() {
    const id = this.props.match.params.id;
    const schedule = this.props.schedule.find(schedule => schedule.id === Number(id));
    this.setState({
      id,
      schedule
    });
  }
  getScheduleWeek = (newMultitude, day) => {
    this.setState(prevState => ({
      schedule: {
        ...prevState.schedule,
        [day]: {
          ...prevState.schedule[day],
          [newMultitude.multitudeIndex]: {
            time: newMultitude.time,
            multitude: newMultitude.multitude
          }
        }
      }
    }));
  };

  getUnderTable = (employees, name) => {
    this.setState(prevState => ({
      schedule: {
        ...prevState.schedule,
        outside: {
          ...prevState.schedule.outside,
          [name]: employees
        }
      }
    }));
  };

  updateSchedule = () => {
    const { schedule, redirect } = this.state;
    const { edit } = this.props;
    const updateSchedule = schedule;
    edit(updateSchedule);
    this.setState({
      redirect: !redirect
    });
  };

  render() {
    const { schedule, redirect } = this.state;
    const { history } = this.props;
    if (redirect) {
      return <Redirect to="/harmonogram" />;
    }
    return (
      <div className="schedule">
        <h1>
          <u>Tryb</u> <u>edycji</u> harmonogramu na okres:
        </h1>
        <input type="date" defaultValue={schedule.dateFrom} onChange={this.handleChange} />
        <input type="date" defaultValue={schedule.dateTo} onChange={this.handleChange} />
        <Week week={schedule} getWeek={this.getScheduleWeek} />
        <UnderTable getUnderTable={this.getUnderTable} UnderTableEmployee={schedule.outside} />
        <div className="options">
          <i className="fas fa-chevron-left" onClick={() => history.goBack()}></i>
          <i class="far fa-calendar-check" onClick={this.updateSchedule}></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  schedule: state.schedules.list
});

const mapDispatchToProps = dispatch => ({
  edit: updateSchedule => dispatch(actions.edit(updateSchedule))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
