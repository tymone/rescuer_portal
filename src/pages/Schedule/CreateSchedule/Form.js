import React, { Component } from "react";

import Table from "./Table.js";
import UnderTable from "./UnderTable.js";

export default class Form extends Component {
  state = {
    dateFrom: "",
    dateTo: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getWeek = schedule => {
    this.setState({
      Monday: schedule.Monday,
      Tuesday: schedule.Tuesday,
      Wednesday: schedule.Wednesday,
      Thursday: schedule.Thursday,
      Friday: schedule.Friday,
      Saturday: schedule.Saturday,
      Sunday: schedule.Sunday
    });
  };

  handleSubmit = () => {
    this.getSchedule();
  };

  render() {
    return (
      <div className="schedule">
        <span>Harmonogram od:</span>
        <input
          name="dateFrom"
          onChange={this.handleChange}
          type="date"
          required
        />
        <span>do:</span>
        <input
          name="dateTo"
          onChange={this.handleChange}
          type="date"
          required
        />
        <Table getWeek={this.getWeek} />
        <UnderTable />
        <button onClick={this.handleSubmit}>Zapisz</button>
      </div>
    );
  }
}
