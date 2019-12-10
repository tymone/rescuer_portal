import React, { Component } from 'react';

import Shift from './Shift.js';

class Day extends Component {
  state = {

  }
  shifts = (day) => {
    const getShifts = Object.keys(day)

    return getShifts.map((shift =>(
      <Shift key={shift} shift={day[shift]} hours={day[shift].time} />
    )))
  }
  
  render(){
    const getShifts = this.props.getDay
    
    return(
      <div className={`day ${this.props.day}`}>
        <p>{this.props.day}</p>
        {this.shifts(getShifts)}
      </div>
    )
  }
}

export default Day;