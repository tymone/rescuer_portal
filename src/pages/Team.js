import React, { Component } from 'react';
import User from './User';
import AddUser from './AddUser';
import Timetable from './Timetable';

export default class Team extends Component {

  state = {
    counter: 0,
    btn: false,
    id: 1,
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
    under2: '',
    team: [
      {
        id: 1,
        name: 'Kazik',
        surname: 'Kowalski',
        stamp: '1234',
        comp: '12345678',
        branch: 'WPPJ',
        tel: '4321',
        birth: '1990-01-01',
        join: '2014-01-02',
        doctor: '2020-01-01',
        train: '2019-01-01',
        kpp: '2020-02-02',
        ground1: '01.01',
        ground2: '03.03',
        osrg1: '05.05',
        osrg2: '07.07',
        under1: '09.09',
        under2: '11.11'
      },
      {
        id: 2,
        name: 'Janusz',
        surname: 'Jankowski',
        stamp: '1234',
        comp: '12345678',
        branch: 'KSRG',
        tel: '4322',
        birth: '1234-34-32',
        join: '1234-43-43',
        doctor: '1234-54-54',
        train: '2344-42-43',
        kpp: '3423-44-44',
        ground1: '32.04',
        ground2: '34.43',
        osrg1: '34.34',
        osrg2: '34.43',
        under1: '21.12',
        under2: '55.54',
        dateOfedit: '12-12-2012'
      }
    ]
  }

  buttonChange = () => {
    let btn = this.state.btn
    this.setState({
      btn: !btn
    })
  }

  handleChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let team = [...this.state.team];
    let btn = this.state.btn;
    let id = this.state.counter;
    const { name, surname, stamp, comp, branch, tel, birth, join, doctor, train, kpp, ground1, ground2, osrg1, osrg2, under1, under2 } = this.state

    team.push({
      id,
      name,
      surname,
      stamp,
      comp,
      branch,
      tel,
      birth,
      join,
      doctor,
      train,
      kpp,
      ground1,
      ground2,
      osrg1,
      osrg2,
      under1,
      under2,
    });

    this.setState({
      team,
      id: id++,
      name,
      surname,
      stamp,
      comp,
      branch,
      tel,
      birth,
      join,
      doctor,
      train,
      kpp,
      ground1,
      ground2,
      osrg1,
      osrg2,
      under1,
      under2,
      btn: !btn
    });
  };

  render() {
    const { name, surname, stamp, comp, branch, tel, birth, join, doctor, train, kpp, ground1, ground2, osrg1, osrg2, under1, under2, btn } = this.state
    return (
      <div>
        {btn ?
          <AddUser
            name={name}
            surname={surname}
            stamp={stamp}
            comp={comp}
            branch={branch}
            tel={tel}
            birth={birth}
            join={join}
            doctor={doctor}
            train={train}
            kpp={kpp}
            ground1={ground1}
            ground2={ground2}
            osrg1={osrg1}
            osrg2={osrg2}
            under1={under1}
            under2={under2}
            change={this.handleChange}
            submit={this.handleSubmit}
          /> : <User user={this.state.team} />}
        <button className='btn btn-primary' onClick={btn ? this.handleSubmit : this.buttonChange}>Dodaj </button>
        <div className="invisible">
          <Timetable team={this.state.team} />
        </div>
      </div>
    )
  }
}