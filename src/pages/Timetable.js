import React, { Component } from 'react';
import Table from './Table';

class Timetable extends Component {
  render() {
    return (
      <div className='row'>
        <div className="col-10">
          <Table />
        </div>
        <div className="col-1 border-left">
          <p>side</p>
        </div>
      </div>
    )
  }
}
export default Timetable;