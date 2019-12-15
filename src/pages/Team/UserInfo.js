/* eslint-disable eqeqeq */
import React, { Component } from "react";
import { connect } from "react-redux";

class UserInfo extends Component {
  state = {};

  date = date => {
    let day = new Date(date).getDate();
    let month = new Date(date).getMonth() + 1;

    return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}`;
  };

  render() {
    const id = this.props.match.params.id;
    const [user] = this.props.user.filter(user => user.id == id);

    console.log(user);
    return (
      <div className="userInfo">
        <span>{user.name} </span>
        <span>{user.surname}</span>
        <span>{this.date(user.doctor)}</span>
        <span>{user.train}</span>
        <span>{user.info}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.team.list
});
export default connect(mapStateToProps)(UserInfo);
