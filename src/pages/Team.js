import React, { Component } from 'react';
import User from './User';

export default class Team extends Component {

  state = {
    counter: 0,
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
        exercises: {
          ground1: '01.01',
          ground2: '03.03',
          osrg1: '05.05',
          osrg2: '07.07',
          under1: '09.09',
          under2: '11.11'
        }
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
        exercises: {
          ground1: '32.04',
          ground2: '34.43',
          osrg1: '34.34',
          osrg2: '34.43',
          under1: '21.12',
          under2: '55.54',
        },
        dateOfedit: '12-12-2012'
      }
    ]
  }

  addUser = (name, surname, stamp, comp, branch, tel, birth, join, doctor, train, kpp, exe1, exe2, exe3, exe4, exe5, exe6) => {
    let counter = this.counter
    const user = {
      id: counter,
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
      exe1,
      exe2,
      exe3,
      exe4,
      exe5,
      exe6
    }
    counter++

    this.setState({
      team: [...this.state.team, user]
    })
  }

  render() {

    return (
      <div>
        <table className='table table-striped table-hover table-bordered'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Imię</th>
              <th scope='col'>Nazwisko</th>
              <th scope='col'>Znaczek</th>
              <th scope='col'>Numer stały</th>
              <th scope='col'>Oddział</th>
              <th scope='col'>Oddz. tel</th>
              <th scope='col'>Data urodzenia</th>
              <th scope='col'>Doł. do KSRG</th>
              <th scope='col'>Badania</th>
              <th scope='col'>Szkolenie</th>
              <th scope='col'>Termin KPP</th>
              <th scope='col'>Ćw. pow1</th>
              <th scope='col'>Ćw. pow2</th>
              <th scope='col'>Ćw. OSRG1</th>
              <th scope='col'>Ćw. OSRG2</th>
              <th scope='col'>Ćw. dół1</th>
              <th scope='col'>Ćw. dół2</th>
            </tr>
          </thead>
          <tbody>
            <User user={this.state.team} />
          </tbody>
        </table>
      </div>
    )
  }
}