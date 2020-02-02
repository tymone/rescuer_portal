import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import { Redirect } from 'react-router';

import Table from './Week/Table';
import UnderTable from './UnderTable/UnderTable';

class Form extends Component {
  state = {
    activeSubmitButton: false,
    redirect: false,
    shifts: '',
    id: '',
    dateFrom: '',
    dateTo: '',
    Monday: {},
    Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {},
    Saturday: {},
    Sunday: {},
    outside: {
      overMultitude: [],
      train: [],
      sick: [],
      course: [],
      leave: []
    }
  };

  componentWillMount() {
    let { id } = this.props;
    const { shifts } = this.props;
    this.setState({
      id: ++id,
      shifts
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getSchedule = newSchedule => {
    const { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = newSchedule;
    this.setState({
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday,
      activeSubmitButton: true
    });
  };

  getUnderTable = outside => {
    console.log(outside);
    this.setState({
      outside
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { add } = this.props;
    const { id, dateFrom, dateTo, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, outside, redirect } = this.state;
    const newSchedule = {
      id,
      dateFrom,
      dateTo,
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday,
      outside
    };

    add(newSchedule);
    this.setState({
      redirect: !redirect
    });
  };

  render() {
    const { redirect, activeSubmitButton } = this.state;
    const { history, shifts } = this.props;
    if (redirect) {
      return <Redirect to="/harmonogram" />;
    }
    return (
      <div className="schedule">
        <div className="dateTitle">
          <span>Harmonogram od:</span>
          <input name="dateFrom" onChange={this.handleChange} type="date" required />
          <span>do:</span>
          <input name="dateTo" onChange={this.handleChange} type="date" required />
        </div>
        <Table shifts={shifts} getSchedule={this.getSchedule} />
        <UnderTable getUnderTable={this.getUnderTable} />
        <div className="options">
          <i className="fas fa-chevron-left" onClick={() => history.goBack()}></i>
          {activeSubmitButton ? <i className="fas fa-calendar-check" onClick={this.handleSubmit}></i> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  id: state.schedules.counter
});

const mapDispatchToProps = dispatch => ({
  add: newSchedule => dispatch(actions.add(newSchedule))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
