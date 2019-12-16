import React, { Component } from "react";

import Day from "./Day";

class Week extends Component {
  render() {
    const {
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday
    } = this.props.week;
    return (
      <div className="table">
        <Day getDay={Monday} day={"Poniedziałek"} />
        <Day getDay={Tuesday} day={"Wtorek"} />
        <Day getDay={Wednesday} day={"Środa"} />
        <Day getDay={Thursday} day={"Czwartek"} />
        <Day getDay={Friday} day={"Piątek"} />
        <Day getDay={Saturday} day={"Sobota"} />
        <Day getDay={Sunday} day={"Niedziela"} />
      </div>
    );
  }
}

export default Week;
