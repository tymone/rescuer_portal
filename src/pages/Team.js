import React, { Component } from "react";
import User from "./User";
import AddUser from "./AddUser";
import axios from "axios";

export default class Team extends Component {
  state = {
    btn: false,
    name: "",
    surname: "",
    stamp: "",
    comp: "",
    branch: "",
    tel: "",
    birth: "",
    join: "",
    doctor: "",
    train: "",
    kpp: "",
    ground1: "",
    ground2: "",
    osrg1: "",
    osrg2: "",
    under1: "",
    under2: "",
    team: []
  };

  componentDidMount = () => {
    axios.get('http://localhost:5000/druzyna')
      .then(response => {
        this.setState({ team: response.data });
      })
      .catch((err) => {
        console.log(err)
      })
  }

  buttonChange = () => {
    let btn = this.state.btn;
    this.setState({
      btn: !btn
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newRescuer = {
      name: this.state.name,
      surname: this.state.surname,
      doctor: this.state.doctor,
      train: this.state.train,
      kpp: this.state.kpp,
      ground1: this.state.ground1,
      ground2: this.state.ground2,
      osrg1: this.state.osrg1,
      osrg2: this.state.osrg2,
      under1: this.state.under1,
      under2: this.state.under2
    }

    axios
      .post('http://localhost:5000/druzyna', newRescuer)
      .then(res => console.log(res.data))
    this.setState({
      btn: !this.state.btn
    });
  };

  render() {

    const btn = this.state.btn;
    return (
      <React.Fragment>
        {btn ? (
          <AddUser
            team={this.state}
            change={this.handleChange}
            submit={this.handleSubmit}
          />
        ) : (
            <User user={this.state.team} />
          )}
        <button onClick={btn ? this.handleSubmit : this.buttonChange}>
          Dodaj
        </button>
      </React.Fragment>
    );
  }
}
