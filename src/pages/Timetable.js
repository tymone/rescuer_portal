import React, { Component } from 'react';
import Table from './Table';
import SidebarTeam from './SidebarTeam';

class Timetable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      team: []
    }
  }
  render() {

    return (
      <div className='row'>
        <div className="col-10">
          <Table />
        </div>
        <div className="col-2 border-left">
          <SidebarTeam />
        </div>
      </div>
    )
  }
}
export default Timetable;