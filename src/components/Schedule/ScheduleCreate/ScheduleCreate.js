import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import actions from '../duck/actions';

import Form from '../Template/Table/Form';

class ScheduleCreate extends Component {
  state = {
    redirect: false,
    schedule: {},
  };

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // getSchedule = (schedule) => {
  //   this.setState({
  //     schedule,
  //   });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { redirect, schedule } = this.state;
  //   const { add } = this.props;
  //   add(schedule);
  //   this.setState({
  //     redirect: !redirect,
  //   });
  // };

  render() {
    const { redirect } = this.state;
    const { history } = this.props;
    if (redirect) {
      return <Redirect to="/harmonogram" />;
    }
    return (
      <>
        <Form type="create" />
        <div className="options">
          <i className="fas fa-chevron-left" onClick={history.goBack} />
          <i className="fas fa-calendar-check" onClick={this.handleSubmit} />
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (newSchedule) => dispatch(actions.add(newSchedule)),
});

ScheduleCreate.propTypes = {
  history: PropTypes.object,
};

export default connect(null, mapDispatchToProps)(ScheduleCreate);
