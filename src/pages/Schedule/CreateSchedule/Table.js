import React, { Component } from "react";

import Day from "./Day";

export default class Table extends Component {
  state = {
    Monday: {},
    Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {},
    Saturday: {},
    Sunday: {}
  };

  getDay = (day, dayValue) => {
    this.setState({
      [day]: dayValue
    });
    const week = this.state;
    this.props.getWeek(week);
  };

  render() {
    return (
      <div className="table">
        <Day getDay={this.getDay} day={"Monday"} dayPl={"Poniedziałek"} />
        <Day getDay={this.getDay} day={"Tuesday"} dayPl={"Wtorek"} />
        <Day getDay={this.getDay} day={"Wednesday"} dayPl={"Środa"} />
        <Day getDay={this.getDay} day={"Thursday"} dayPl={"Czwartek"} />
        <Day getDay={this.getDay} day={"Friday"} dayPl={"Piątek"} />
        <Day getDay={this.getDay} day={"Saturday"} dayPl={"Sobota"} />
        <Day getDay={this.getDay} day={"Sunday"} dayPl={"Niedziela"} />
      </div>
    );
  }
}
