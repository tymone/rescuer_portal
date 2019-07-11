import React, { Component } from "react";
import User from "./User";
import AddUser from "./AddUser";
import axios from "axios";

import "../../styles/style.css";

export default class Team extends Component {
  counter = 12;
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
    team: [
      { id: 0, name: 'Imie1', surname: 'Nazwisko1', doctor: '01.01.2019', train: '02.01.2019', kpp: '03.01.2019', ground1: '04.01.2019', ground2: '05.01.2019', osrg1: '06.06.2019', osrg2: '07.07.2019', under1: '08.08.2019', under2: '09.09.2019' },
      { id: 1, name: 'Imie2', surname: 'Nazwisko2', doctor: '01.02.2019', train: '02.02.2019', kpp: '03.02.2019', ground1: '04.02.2019', ground2: '05.02.2019', osrg1: '06.02.2019', osrg2: '07.02.2019', under1: '08.02.2019', under2: '09.02.2019' },
      { id: 2, name: 'Imie3', surname: 'Nazwisko3', doctor: '01.03.2019', train: '02.03.2019', kpp: '03.03.2019', ground1: '04.03.2019', ground2: '05.03.2019', osrg1: '06.03.2019', osrg2: '07.03.2019', under1: '08.03.2019', under2: '09.03.2019' },
      { id: 3, name: 'Imie4', surname: 'Nazwisko4', doctor: '01.04.2019', train: '02.04.2019', kpp: '03.04.2019', ground1: '04.04.2019', ground2: '05.04.2019', osrg1: '06.04.2019', osrg2: '07.04.2019', under1: '08.04.2019', under2: '09.04.2019' },
      { id: 4, name: 'Imie5', surname: 'Nazwisko5', doctor: '01.05.2019', train: '02.05.2019', kpp: '03.05.2019', ground1: '04.05.2019', ground2: '05.05.2019', osrg1: '06.05.2019', osrg2: '07.05.2019', under1: '08.05.2019', under2: '09.05.2019' },
      { id: 5, name: 'Imie6', surname: 'Nazwisko6', doctor: '01.06.2019', train: '02.06.2019', kpp: '03.06.2019', ground1: '04.06.2019', ground2: '05.06.2019', osrg1: '06.06.2019', osrg2: '07.06.2019', under1: '08.06.2019', under2: '09.06.2019' },
      { id: 6, name: 'Imie7', surname: 'Nazwisko7', doctor: '01.07.2019', train: '02.07.2019', kpp: '03.07.2019', ground1: '04.07.2019', ground2: '05.07.2019', osrg1: '06.07.2019', osrg2: '07.07.2019', under1: '08.07.2019', under2: '09.07.2019' },
      { id: 7, name: 'Imie8', surname: 'Nazwisko8', doctor: '01.08.2019', train: '02.08.2019', kpp: '03.08.2019', ground1: '04.08.2019', ground2: '05.08.2019', osrg1: '06.08.2019', osrg2: '07.08.2019', under1: '08.08.2019', under2: '09.08.2019' },
      { id: 8, name: 'Imie9', surname: 'Nazwisko9', doctor: '01.09.2019', train: '02.09.2019', kpp: '03.09.2019', ground1: '04.09.2019', ground2: '05.09.2019', osrg1: '06.09.2019', osrg2: '07.09.2019', under1: '08.09.2019', under2: '09.09.2019' },
      { id: 9, name: 'Imie10', surname: 'Nazwisko10', doctor: '01.10.2019', train: '02.10.2019', kpp: '03.10.2019', ground1: '04.10.2019', ground2: '05.10.2019', osrg1: '06.10.2019', osrg2: '07.10.2019', under1: '08.10.2019', under2: '09.10.2019' },
      { id: 10, name: 'Imie11', surname: 'Nazwisko11', doctor: '01.11.2019', train: '02.11.2019', kpp: '03.11.2019', ground1: '04.11.2019', ground2: '05.11.2019', osrg1: '06.11.2019', osrg2: '07.11.2019', under1: '08.11.2019', under2: '09.11.2019' },
      { id: 11, name: 'Imie12', surname: 'Nazwisko12', doctor: '01.12.2019', train: '02.12.2019', kpp: '03.12.2019', ground1: '04.12.2019', ground2: '05.12.2019', osrg1: '06.12.2019', osrg2: '07.12.2019', under1: '08.12.2019', under2: '09.12.2019' }

    ]
  };

  // componentDidMount = () => {
  //   axios.get('http://localhost:5000/druzyna')
  //     .then(response => {
  //       this.setState({ team: response.data });
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

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
    const id = this.counter
    if (name.length && surname.length && doctor.length && train.length && kpp.length && ground1.length && ground2.length && osrg1.length && osrg2.length && under1.length && under2.length > 0) {
      const newRescuer = {
        id,
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
      this.setState({
        team: [...this.state.team, newRescuer]
      })
      this.counter++

      // axios
      //   .post('http://localhost:5000/druzyna', newRescuer)
      //   .then(res => console.log(res.data))
      // this.setState({
      //   btn: !this.state.btn
      // });

      // alert('Pomyślnie dodano ratownika do bazy.')
    } else { alert('Nie wszystkie pola zostały wypełnione') }
  };

  handleSort = (i) => {
    this.setState({
      toggle: !this.state.toggle
    })
    console.log(i, this.state.toggle)
  }

  //< i className="fas fa-caret-down" ></i >
  //<i className="fas fa-caret-up"></i>

  edit = (i) => {
    console.log(i + 'go to edit wind')
  }

  delete = (i) => {
    const team = [...this.state.team];
    const index = team.findIndex(user => user.id === i)
    team.splice(index, 1);
    this.setState({
      team
    })
  }
  render() {
    const btn = this.state.btn;

    const tableHeadValue = [
      "#", "Imię", "Nazwisko", "Badania", "Szkolenie", "Termin KPP", "Ćw. pow1", "Ćw. pow2", "Ćw. OSRG1", "Ćw. OSRG2", "Ćw. doł1", "Ćw. doł2", "Edycja"
    ];
    // 
    // 
    const tableHead = tableHeadValue.map((value, i) => <th key={i} onClick={() => this.handleSort(i)}> {value} {this.state.toggle ? < i className="fas fa-caret-down" ></i > : <i className="fas fa-caret-up"></i>}</ th>);

    return (
      <React.Fragment>
        <table className='team'>
          <thead>
            <tr>{tableHead}</tr>
          </thead>
          <tbody>
            <User user={this.state.team} edit={this.edit} delete={this.delete} />
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