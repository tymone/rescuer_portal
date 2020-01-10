import React, { Component } from "react";

export default class Multitude extends Component {
  state = {
    time: "",
    user1: "",
    user2: "",
    user3: "",
    user4: "",
    user5: ""
  };

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => this.handleSubmit(this.state)
    );
  };

  handleSubmit = multitude => {
    const { multitudeName, getMultitude } = this.props;
    const { user1, user2, user3, user4, user5, time } = multitude;
    const newSchedule = {
      multitudeName,
      time,
      user1: user1 ? user1 : "---",
      user2: user2 ? user2 : "---",
      user3: user3 ? user3 : "---",
      user4: user4 ? user4 : "---",
      user5: user5 ? user5 : "---"
    };
    getMultitude(newSchedule);
  };

  render() {
    const { user1, user2, user3, user4, user5, time } = this.state;
    return (
      <div className="multitude">
        <input
          type="time"
          name="time"
          value={time}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="nazwisko"
          name="user1"
          value={user1}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="nazwisko"
          name="user2"
          value={user2}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="nazwisko"
          name="user3"
          value={user3}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="nazwisko"
          name="user4"
          value={user4}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="nazwisko"
          name="user5"
          value={user5}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
