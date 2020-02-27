import React, { Component } from 'react';

import OutOfScheduleGroup from './OutOfScheduleGroup';

class OutOfSchedule extends Component {
  state = {
    groups: {}
  };

  componentWillMount() {
    const {
      type,
      groups: { train, sick, course, leave }
    } = this.props;
    if (type === 'read' || 'update') {
      this.setState({
        groups: {
          train,
          sick,
          course,
          leave
        }
      });
    }
  }

  setGroups = (groups) => {
    const { type, getOutOfSchedule } = this.props;
    const getArrayGroups = Object.keys(groups);
    return getArrayGroups.map((group) => (
      <OutOfScheduleGroup type={type} key={group} getOutOfSchedule={getOutOfSchedule} title={group} details={groups[group]} />
    ));
  };
  render() {
    const { groups } = this.state;
    return <ul className="outOfSchedule">{this.setGroups(groups)}</ul>;
  }
}

export default OutOfSchedule;
