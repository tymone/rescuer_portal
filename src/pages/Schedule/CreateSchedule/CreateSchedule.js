import React, { Component } from 'react';
import { connect } from 'react-redux';

import SelectShift from './SelectShift';
import Form from './Form';

class CreateSchedule extends Component {
  state = {
    shifts: '3'
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getShiftNumber = (shifts) => {
    this.setState({
      shifts
    });
  };
  render() {
    const { shifts } = this.state;
    const { team } = this.props;
    return (
      <div className="schedule">
        <SelectShift team={team} getShiftNumber={this.getShiftNumber} />
        <Form shiftsNumber={shifts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  team: state.team.list
});

export default connect(mapStateToProps)(CreateSchedule);
