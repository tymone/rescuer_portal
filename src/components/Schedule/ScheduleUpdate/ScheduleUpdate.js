import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import actions from '../duck/actions';

// import Form from '../Template/Table/Form';

class ScheduleUpdate extends Component {
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
    // const { redirect } = this.state;
    // const { history, match, schedules } = this.props;
    // const id = match.params.id;
    // const schedule = schedules.find((schedule) => schedule.id === Number(id));
    // if (redirect) {
    //   return <Redirect to="/harmonogram" />;
    // }
    return (
      <p>schedule update</p>
      // <>
      //   <Form schedule={schedule} getSchedule={this.getSchedule} type="update" />
      //   <div className="options">
      //     <i className="fas fa-chevron-left" onClick={history.goBack} />
      //     <i className="fas fa-calendar-check" onClick={this.handleSubmit} />
      //   </div>
      // </p>
    );
  }
}
const mapStateToProps = ({ schedules }) => ({
  schedules: schedules.list,
});

const mapDispatchToProps = (dispatch) => ({
  update: (updateSchedule) => dispatch(actions.update(updateSchedule)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleUpdate);
