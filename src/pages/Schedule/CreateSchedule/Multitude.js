import React, { Component } from "react";

export default class Multitude extends Component {
  state = {
    user1: "",
    user2: "",
    user3: "",
    user4: "",
    user5: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    const { user1, user2, user3, user4, user5 } = this.state;
    const { name, getMultitude } = this.props;
    const multitude = [user1, user2, user3, user4, user5];

    getMultitude(name, multitude);
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { name } = this.props;

    return (
      <div className={`${name}`}>
        <input
          type="text"
          placeholder="nazwisko"
          name="user1"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="nazwisko"
          name="user2"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="nazwisko"
          name="user3"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="nazwisko"
          name="user4"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="nazwisko"
          name="user5"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
