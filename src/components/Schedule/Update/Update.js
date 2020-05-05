import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import { Redirect } from 'react-router-dom';

import Form from '../Template/Table/Form';

class Update extends Component {
  state = {
    redirect: false,
    schedule: {},
  };

  getSchedule = (schedule) => {
    this.setState({ schedule });
  };

  handleSubmit = () => {
    const { redirect, schedule } = this.state;
    const { update } = this.props;
    update(schedule);
    this.setState({
      redirect: !redirect,
    });
  };

  render() {
    const { redirect } = this.state;
    const { history, match, schedules } = this.props;
    const id = match.params.id;
    const schedule = schedules.find((schedule) => schedule.id === Number(id));
    if (redirect) {
      return <Redirect to="/harmonogram" />;
    }
    return (
      <>
        <Form schedule={schedule} getSchedule={this.getSchedule} type={'update'} />
        <div className="options">
          <i className="fas fa-chevron-left" onClick={history.goBack}></i>
          <i className="fas fa-calendar-check" onClick={this.handleSubmit}></i>
        </div>
      </>
    );
  }
}
const mapStateToProps = ({ schedules }) => ({
  schedules: schedules.list,
});

const mapDispatchToProps = (dispatch) => ({
  update: (updateSchedule) => dispatch(actions.update(updateSchedule)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
