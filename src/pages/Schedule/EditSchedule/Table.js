/* eslint-disable eqeqeq */
import React, { Component } from "react";
import { connect } from "react-redux";
// import actions from '../duck/actions';
// import { Redirect } from 'react-router-dom';

import Week from "./Week.js";
import UnderTable from "./UnderTable.js";

class Table extends Component {
  state = {
    id: "",
    schedule: []
  };

  render() {
    const id = this.props.match.params.id;
    const [schedule] = this.props.schedule.filter(
      schedule => schedule.id == id
    );

    return (
      <div className="schedule">
        <h1>
          <u>Tryb</u> <u>edycji</u> harmonogramu na okres:
        </h1>
        <input
          type="date"
          defaultValue={schedule.dateFrom}
          onChange={this.handleChange}
        />
        <input
          type="date"
          defaultValue={schedule.dateTo}
          onChange={this.handleChange}
        />
        <Week week={schedule} />
        <UnderTable getUnderTableEmployee={schedule.outside} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  schedule: state.schedules.list
});

export default connect(mapStateToProps)(Table);
