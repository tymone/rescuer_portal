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
    const { name, surname, doctor, train, kpp, ground1, ground2, osrg1, osrg2, under1, under2 } = this.state
    if (name.length && surname.length && doctor.length && train.length && kpp.length && ground1.length && ground2.length && osrg1.length && osrg2.length && under1.length && under2.length > 0) {
      const newRescuer = {
        name,
        surname,
        doctor,
        train,
        kpp,
        ground1,
        ground2,
        osrg1,
        osrg2,
        under1,
        under2
      }

      axios
        .post('http://localhost:5000/druzyna', newRescuer)
        .then(res => console.log(res.data))
      this.setState({
        btn: !this.state.btn
      });

      alert('Pomyślnie dodano ratownika do bazy.')
    } else { alert('Nie wszystkie pola zostały wypełnione') }
  };

  render() {
    const btn = this.state.btn;

    const tableHeadValue = [
      "#",
      "Imię",
      "Nazwisko",
      "Badania",
      "Szkolenie",
      "Termin KPP",
      "Ćw. pow1",
      "Ćw. pow2",
      "Ćw. OSRG1",
      "Ćw. OSRG2",
      "Ćw. doł1",
      "Ćw. doł2"
    ];
    const tableHead = tableHeadValue.map((value, i) => <th key={i}>{value}</th>);

    return (
      <React.Fragment>
        <table className='team'>
          <thead>
            <tr>{tableHead}</tr>
          </thead>
          <tbody>
            <User user={this.state.team} />
            {btn ? <AddUser team={this.state} change={this.handleChange} /> : null}
          </tbody>
        </table>
        <button onClick={btn ? this.handleSubmit : this.buttonChange}>
          Dodaj
        </button>
      </React.Fragment>
    );
  }
}


