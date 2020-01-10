import React, { Component } from "react";

class Multitude extends Component {
  state = {
    time: "",
    user1: "",
    user2: "",
    user3: "",
    user4: "",
    user5: ""
  };

  componentDidMount() {
    const { multitude, time } = this.props;
    this.setState({
      time,
      user1: multitude[0],
      user2: multitude[1],
      user3: multitude[2],
      user4: multitude[3],
      user5: multitude[4]
    });
  }

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => this.handleSubmit()
    );
  };

  handleSubmit = () => {
    const { user1, user2, user3, user4, user5, time } = this.state;
    const { getMultitude, multitudeIndex } = this.props;
    const multitude = {
      time,
      multitudeIndex,
      multitude: [
        user1 ? user1 : "---",
        user2 ? user2 : "---",
        user3 ? user3 : "---",
        user4 ? user4 : "---",
        user5 ? user5 : "---"
      ]
    };

    getMultitude(multitude);
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
          name="user1"
          value={user1}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="user2"
          value={user2}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="user3"
          value={user3}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="user4"
          value={user4}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="user5"
          value={user5}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Multitude;
