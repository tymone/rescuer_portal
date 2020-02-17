import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import { Redirect } from 'react-router';

import Week from '../Table/Week';
import UnderTable from './UnderTable/UnderTable';

import shifts3 from './TemplateShifts/shifts3';
import shifts4 from './TemplateShifts/shifts4';
import shifts7 from './TemplateShifts/shifts7';

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
      train: [],
      sick: [],
      course: [],
      leave: []
    }
  };

  componentDidMount() {
    let { id } = this.props;
    const { shiftsNumber } = this.props;
    this.setState({
      id: ++id,
      shifts: shiftsNumber
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getSchedule = (newSchedule) => {
    const { day, multitudeName, time, multitude } = newSchedule;

    this.setState((prevState) => ({
      [day]: {
        ...prevState[day],
        [multitudeName]: {
          time,
          multitude
        }
      }
    }));
    // const { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = newSchedule;
    // this.setState({
    //   Monday,
    //   Tuesday,
    //   Wednesday,
    //   Thursday,
    //   Friday,
    //   Saturday,
    //   Sunday,
    //   activeSubmitButton: true
    // });
  };

  getUnderTable = (outside) => {
    console.log(outside);
    this.setState({
      outside
    });
  };

  handleSubmit = (e) => {
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

  sendScheduleTemplate = (shifts) => {
    let shiftsTemplate = shifts3;
    switch (Number(shifts)) {
      case 3:
        shiftsTemplate = shifts3;
        break;
      case 4:
        shiftsTemplate = shifts4;
        break;
      case 7:
        shiftsTemplate = shifts7;
        break;
      default:
        return;
    }
    return shiftsTemplate;
  };

  render() {
    const { redirect, activeSubmitButton } = this.state;
    const { history, shiftsNumber } = this.props;
    if (redirect) {
      return <Redirect to="/harmonogram" />;
    }
    return (
      <div>
        <div className="dateTitle">
          <span>Harmonogram od:</span>
          <input name="dateFrom" onChange={this.handleChange} type="date" required />
          <span>do:</span>
          <input name="dateTo" onChange={this.handleChange} type="date" required />
        </div>
        <Week type={'create'} getSchedule={this.getSchedule} schedule={this.sendScheduleTemplate(shiftsNumber)} />
        {/* <UnderTable getUnderTable={this.getUnderTable} /> */}
        <div className="options">
          <i className="fas fa-chevron-left" onClick={() => history.goBack()}></i>
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
  add: (newSchedule) => dispatch(actions.add(newSchedule))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
