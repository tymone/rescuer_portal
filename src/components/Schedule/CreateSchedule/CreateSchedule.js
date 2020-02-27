import React, { Component } from 'react';
import { connect } from 'react-redux';

import SelectShift from './SelectShift';
import UpdateForm from '../Template/UpdateForm';

import shifts3 from './TemplateShifts/shifts3';
import shifts4 from './TemplateShifts/shifts4';
import shifts7 from './TemplateShifts/shifts7';

class CreateSchedule extends Component {
  state = {
    shifts: 3,
    schedule: shifts3
  };

  getScheduleTemplate = (shifts) => {
    if (shifts === '4') {
      this.setState({
        shifts,
        schedule: shifts4
      });
    } else if (shifts === '7') {
      this.setState({
        shifts,
        schedule: shifts7
      });
    } else {
      this.setState({
        shifts: 3,
        schedule: shifts3
      });
    }
  };

  render() {
    const { schedule } = this.state;
    const { team } = this.props;
    return (
      <>
        <SelectShift team={team} getShiftNumber={this.getScheduleTemplate} />
        <UpdateForm schedule={schedule} type={'create'} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  team: state.team.list
});

export default connect(mapStateToProps)(CreateSchedule);
