import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledOutOfWeek } from './StyledOutOfWeek';

import OutOfWeekGroup from './OutOfWeekGroup';

class OutOfWeek extends Component {
  state = {
    train: [],
    leave: [],
    course: [],
    sick: [],
  };

  componentDidUpdate(prevProps) {
    const { schedule } = this.props;
    if (this.props !== prevProps) {
      const { train, leave, course, sick } = schedule;
      this.setState({
        train,
        leave,
        course,
        sick,
      });
    }
  }

  setGroups = () => {
    const { type } = this.props;
    const getArrayGroups = Object.keys(this.state);
    return getArrayGroups.map((group) => (
      <OutOfWeekGroup
        type={type}
        key={group}
        // getList={this.getList}
        title={group}
        list={this.state[group]}
      />
    ));
  };

  render() {
    return <StyledOutOfWeek>{this.setGroups()}</StyledOutOfWeek>;
  }
}

OutOfWeek.propTypes = {
  type: PropTypes.string.isRequired,
  schedule: PropTypes.object,
};

export default OutOfWeek;
