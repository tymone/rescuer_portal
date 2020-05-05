import React, { Component } from 'react';

import OutOfWeekGroup from './OutOfWeekGroup';

class OutOfWeek extends Component {
  state = {
    train: [],
    leave: [],
    course: [],
    sick: [],
  };

  componentDidMount() {
    const { type, schedule } = this.props;
    if (type !== 'create') {
      const { train, leave, course, sick } = schedule;
      this.setState({
        train,
        leave,
        course,
        sick,
      });
    }
  }

  getList = (group, rescuer) => {
    const { getOutOfWeek } = this.props;
    this.setState(
      {
        [group]: rescuer,
      },
      () => getOutOfWeek(this.state)
    );
  };

  setGroups = () => {
    const { type } = this.props;
    const getArrayGroups = Object.keys(this.state);
    return getArrayGroups.map((group) => (
      <OutOfWeekGroup type={type} key={group} getList={this.getList} title={group} list={this.state[group]} />
    ));
  };
  render() {
    return <ul className="outOfSchedule">{this.setGroups()}</ul>;
  }
}

export default OutOfWeek;
