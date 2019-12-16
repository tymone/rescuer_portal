/* eslint-disable eqeqeq */
import React, { Component } from "react";
import { connect } from "react-redux";

import date from "../../helpers/setDate";

class UserInfo extends Component {
  state = {};

  render() {
    const id = this.props.match.params.id;
    const [user] = this.props.user.filter(user => user.id == id);
    const { name, surname, doctor, train, info } = user;
    return (
      <div className="userInfo">
        <span>{name} </span>
        <span>{surname}</span>
        <span>{date(doctor)}</span>
        <span>{train}</span>
        <span>{info}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.team.list
});
export default connect(mapStateToProps)(UserInfo);
