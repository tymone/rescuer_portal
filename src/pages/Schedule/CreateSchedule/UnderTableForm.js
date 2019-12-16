import React, { Component } from "react";
import { connect } from "react-redux";

class UnderTableForm extends Component {
  state = {};
  render() {
    const { title, name } = this.props;
    return (
      <div>
        <b>
          <u>{title}</u>
        </b>
        <i className={"fas fa-user-plus"}></i>:
        <div className={name}>
          <input type="text" />
          <i className={"fas fa-user-check"}></i>
        </div>
      </div>
    );
  }
}

export default connect()(UnderTableForm);
