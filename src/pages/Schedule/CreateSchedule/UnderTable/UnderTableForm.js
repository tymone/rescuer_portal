import React, { Component } from "react";
import { connect } from "react-redux";

import UnderTableUsers from "./UnderTableUsers";

class UnderTableForm extends Component {
  state = {
    user: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const { user } = this.state;
    const { name } = this.props;
    this.props.addUser(user, name);
  };
  render() {
    const { title, name, users } = this.props;
    return (
      <div className="underTableForm">
        <span className="title">{title}</span>
        <i className={"fas fa-user-plus"}></i>:
        <input
          type="text"
          value={this.state.user}
          name="user"
          onChange={this.handleChange}
        />
        <i className={"fas fa-user-check"} onClick={this.handleSubmit}></i>
        <UnderTableUsers users={users} name={name} />
      </div>
    );
  }
}

export default connect()(UnderTableForm);
