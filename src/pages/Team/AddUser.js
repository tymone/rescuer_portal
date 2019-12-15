import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import actions from "./duck/actions";

class AddUser extends Component {
  state = {
    name: "",
    surname: "",
    doctor: "",
    checkedGroup: "",
    redirect: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, surname, doctor, checkedGroup } = this.state;
    const newRescuer = {
      id: 108842,
      name,
      surname,
      doctor: new Date(doctor).getTime(),
      train: checkedGroup
    };
    this.props.add(newRescuer);
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () =>
    this.state.redirect ? <Redirect to="/druzyna" /> : null;

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const trainGroups = this.props.group;
    const getArrayTrainGroups = Object.keys(trainGroups);
    const getTrainGroup = getArrayTrainGroups.map((index, i) => (
      <option value={`grupa ${i + 1}`} key={index}>
        {`Grupa ${i + 1}`}
      </option>
    ));

    return (
      <div className="team">
        <div className="addUser">
          {this.renderRedirect()}
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">
              <p> Imię:</p>
              <input
                type="text"
                placeholder="wpisz imię..."
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </label>
            <label htmlFor="surname">
              <p>Nazwisko:</p>
              <input
                type="text"
                placeholder="wpisz nazwisko..."
                name="surname"
                value={this.state.surname}
                onChange={this.handleChange}
                required
              />
            </label>
            <label htmlFor="doctor">
              <p>Badania:</p>
              <input
                type="date"
                name="doctor"
                value={this.state.doctor}
                onChange={this.handleChange}
                required
              />
            </label>
            <label htmlFor="train">
              <p>Wybierz grupę ćwiczeń:</p>
              <select
                value={this.state.checkedGroup}
                name="checkedGroup"
                onChange={this.handleChange}
              >
                {getTrainGroup}
              </select>
            </label>
            <button>Zapisz</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: rescuer => dispatch(actions.add(rescuer))
});

const mapStateToProps = state => ({
  group: state.group.list
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
