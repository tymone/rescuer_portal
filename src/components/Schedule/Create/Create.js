import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import actions from '../duck/actions';

import SelectShift from './SelectShift';
import Form from '../Template/Table/Form';

class Create extends Component {
  state = {
    redirect: false,
    shifts: 6,
    schedule: {},
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getSchedule = (schedule) => {
    this.setState({
      schedule,
    });
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
    const { shifts, redirect } = this.state;
    const { history } = this.props;
    if (redirect) {
      return <Redirect to="/harmonogram" />;
    }
    return (
      <>
        <SelectShift handleChange={this.handleChange} shifts={shifts} />
        <Form type="create" shifts={shifts} getSchedule={this.getSchedule} />
        <div className="options">
          <i className="fas fa-chevron-left" onClick={history.goBack}></i>
          <i className="fas fa-calendar-check" onClick={this.handleSubmit}></i>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (newSchedule) => dispatch(actions.add(newSchedule)),
});

export default connect(null, mapDispatchToProps)(Create);
