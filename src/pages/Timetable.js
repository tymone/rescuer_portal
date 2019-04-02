import React, { Component } from 'react';
import Table from './Table';

class Timetable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      team: [],
      week: [' 01.04-08.04', '09.04-17.04']
    }
  }
  render() {


    return (
      <div className='row'>
        <div className="col-12">
          <Table date={this.state.week[0]} />
          <Table date={this.state.week[1]} />
        </div>
      </div>
    )
  }
}
export default Timetable;