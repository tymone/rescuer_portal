import React, { Component } from "react";

import Shift from "./Shift.js";

class Day extends Component {
  state = {};
  shifts = day => {
    const getShifts = Object.keys(day);

    return getShifts.map(shift => (
      <Shift key={shift} shift={day[shift]} hours={day[shift].time} />
    ));
  };

  render() {
    const { day, getDay } = this.props;

    return (
      <div className={`day ${day}`}>
        <p>{day}</p>
        {this.shifts(getDay)}
      </div>
    );
  }
}

export default Day;
