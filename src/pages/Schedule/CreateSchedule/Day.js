import React, { Component } from "react";

import Shift from "./Shift.js";

export default class Day extends Component {
  state = {
    shift1: {},
    shift2: {},
    shift3: {}
  };

  getShift = (shift, shiftValue) => {
    this.setState({
      [shift]: shiftValue
    });
    const { day, getDay } = this.props;
    const dayValue = this.state;
    getDay(day, dayValue);
  };

  render() {
    const { day, dayPl } = this.props;
    return (
      <div className={`day ${day}`}>
        <p>{`${dayPl}`}</p>
        <Shift
          getShift={this.getShift}
          day={day}
          shift={"shift1"}
          time={"6:30"}
        />
        <Shift
          getShift={this.getShift}
          day={day}
          shift={"shift2"}
          time={"14:00"}
        />
        <Shift
          getShift={this.getShift}
          day={day}
          shift={"shift3"}
          time={"21:30"}
        />
      </div>
    );
  }
}
