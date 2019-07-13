import React, { Component } from 'react';

import User from './User';
import AddUser from './AddUser';

class Table extends Component {
  constructor(props) {
    super(props);
    this.counter = 12;
    this.state = {
      btn: false,
      name: '',
      surname: '',
      stamp: '',
      comp: '',
      branch: '',
      tel: '',
      birth: '',
      join: '',
      doctor: '',
      train: '',
      kpp: '',
      ground1: '',
      ground2: '',
      osrg1: '',
      osrg2: '',
      under1: '',
      under2: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const {
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
    } = this.state;
    const id = this.counter;
    if (
      name.length &&
      surname.length &&
      doctor.length &&
      train.length &&
      kpp.length &&
      ground1.length &&
      ground2.length &&
      osrg1.length &&
      osrg2.length &&
      under1.length &&
      under2.length > 0
    ) {
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
      };
      this.setState({
        team: [...this.props.team, newRescuer],
        btn: false
      });
      this.counter++;
    } else {
      alert('Nie wszystkie pola zostały wypełnione');
    }
  };

  buttonChange = () => {
    let btn = this.state.btn;
    this.setState({
      btn: !btn
    });
  };

  edit = i => {
    console.log('edit user' + i);
  };

  delete = i => {
    const team = [...this.props.team];
    const index = team.findIndex(user => user.id === i);
    team.splice(index, 1);
    this.setState({
      team
    });
  };

  handleSort = i => {
    this.setState({
      toggle: !this.state.toggle
    });
    console.log(i, this.state.toggle);
  };

  //< i className="fas fa-caret-down" ></i >
  //<i className="fas fa-caret-up"></i>

  render() {
    const btn = this.state.btn;
    const tableHeadValue = [
      '#',
      'Imię',
      'Nazwisko',
      'Badania',
      'Szkolenie',
      'Termin KPP',
      'Ćw. pow1',
      'Ćw. pow2',
      'Ćw. OSRG1',
      'Ćw. OSRG2',
      'Ćw. doł1',
      'Ćw. doł2',
      'Edycja'
    ];
    //
    //
    const tableHead = tableHeadValue.map((value, i) => (
      <th key={i} onClick={() => this.handleSort(i)}>
        {' '}
        {value}{' '}
        {this.state.toggle ? (
          <i className='fas fa-caret-down' />
        ) : (
          <i className='fas fa-caret-up' />
        )}
      </th>
    ));

    return (
      <>
        <table className='team'>
          <thead>
            <tr>{tableHead}</tr>
          </thead>
          <tbody>
            <User
              team={this.props.team}
              edit={this.edit}
              delete={this.delete}
            />
            {btn ? (
              <AddUser team={this.props.team} change={this.handleChange} />
            ) : null}
          </tbody>
        </table>
        <button onClick={btn ? this.handleSubmit : this.buttonChange}>
          Dodaj
        </button>
      </>
    );
  }
}

export default Table;
