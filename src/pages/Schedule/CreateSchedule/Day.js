import React, { Component } from 'react';

import Shift from './Shift.js';


export default class Day extends Component {
  state={}

  render(){
    const { day, dayPl } = this.props
    return(
      <div className={`day ${day}`}>
         <p>{`${dayPl}`}</p>
         <Shift day={day} shift={'shift1'} time={'6:30'}/>
         <Shift day={day} shift={'shift2'} time={'14:00'}/>
         <Shift day={day} shift={'shift3'} time={'21:30'}/>
       </div>
    )
  }
}