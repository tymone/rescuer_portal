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

  componentDidMount() {
    const {
      schedule: { train, leave, course, sick },
    } = this.props;
    this.setState({
      train,
      leave,
      course,
      sick,
    });
  }

  setGroups = () => {
    const { type } = this.props;
    const getArrayGroups = Object.keys(this.state);
    return getArrayGroups.map((group) => (
      <OutOfWeekGroup
        type={type}
        key={group}
        title={group}
        getList={this.getList}
        list={this.state[group]}
      />
    ));
  };

  getList = (group, title) => {
    const { getOutOfWeek } = this.props;
    this.setState(
      (prevState) => ({
        ...prevState,
        [title]: group,
      }),
      () => getOutOfWeek(this.state),
    );
  };

  render() {
    return <StyledOutOfWeek>{this.setGroups()}</StyledOutOfWeek>;
  }
}

OutOfWeek.propTypes = {
  type: PropTypes.string.isRequired,
  schedule: PropTypes.object,
  getOutOfWeek: PropTypes.func,
};

export default OutOfWeek;
