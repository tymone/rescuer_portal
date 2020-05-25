import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledTime, StyledShift } from './StyledShift';

import Multitude from '../Multitude';
import OverMultitude from '../OverMultitude';

class Shift extends Component {
  state = {
    time: '',
    multitude: [],
    overMultitude: [],
  };

  componentDidMount() {
    const { time, multitude, overMultitude } = this.props;
    this.setState({
      time,
      multitude,
      overMultitude,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      this.sendShiftToDay();
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getMultitude = (multitude) => {
    this.setState({
      multitude,
    });
  };

  getOverMultitude = (newRescuer) => {
    const { overMultitude } = this.state;
    const newOverMultitude = [...overMultitude, newRescuer];
    this.setState({
      overMultitude: newOverMultitude,
    });
  };

  sendShiftToDay = () => {
    const { time, multitude, overMultitude } = this.state;
    const { getShift, multitudeNumber } = this.props;
    const shift = {
      multitudeNumber,
      time,
      multitude,
      overMultitude,
    };
    getShift(shift);
  };

  render() {
    const { type } = this.props;
    const { multitude, overMultitude, time } = this.state;
    return (
      <>
        <StyledTime>
          {type === 'read' ? (
            time
          ) : (
            <input type="time" value={time} name="time" onChange={this.handleChange} />
          )}
        </StyledTime>
        <StyledShift>
          <Multitude type={type} multitude={multitude} getMultitude={this.getMultitude} />
          <OverMultitude
            type={type}
            overMultitude={overMultitude}
            getOverMultitude={this.getOverMultitude}
          />
        </StyledShift>
      </>
    );
  }
}

Shift.propTypes = {
  type: PropTypes.string.isRequired,
  time: PropTypes.string,
  multitude: PropTypes.array,
  overMultitude: PropTypes.array,
  getShift: PropTypes.func,
  multitudeNumber: PropTypes.string,
};

export default Shift;
