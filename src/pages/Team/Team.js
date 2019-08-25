import React, { Component } from 'react';
import Table from './Table';
// import axios from 'axios';

import AddUser from './AddUser';

import '../../styles/style.css';

export default class Team extends Component {
  counter = 12
  state = {
    sortMove: true,
    addUser: false,
    team: [
      {
        id: 0,
        name: 'Imie1',
        surname: 'Nazwisko1',
        doctor: 1546297200000,
        train: 'grupa1',
      },
      {
        id: 1,
        name: 'Imie2',
        surname: 'Nazwisko2',
        doctor: 1546383600000,
        train: 'grupa 2',
      },
      {
        id: 2,
        name: 'Imie3',
        surname: 'Nazwisko3',
        doctor: 1546470000000,
        train: 'grupa 3'
      },
      {
        id: 3,
        name: 'Imie4',
        surname: 'Nazwisko4',
        doctor: 1546556400000,
        train: 'grupa 4'
      },
      {
        id: 4,
        name: 'Imie5',
        surname: 'Nazwisko5',
        doctor: 1549321200000,
        train: 'grupa 5'
      },
      {
        id: 5,
        name: 'Imie6',
        surname: 'Nazwisko6',
        doctor: 1549407600000,
        train: 'grupa 6'
      },
      {
        id: 6,
        name: 'Imie7',
        surname: 'Nazwisko7',
        doctor: 1549494000000,
        train: 'grupa 7'
      },
      {
        id: 7,
        name: 'Imie8',
        surname: 'Nazwisko8',
        doctor: 1549580400000,
        train: 'grupa 8'
      },
      {
        id: 8,
        name: 'Imie9',
        surname: 'Nazwisko9',
        doctor: 1549666800000,
        train: 'grupa 6'
      },
      {
        id: 9,
        name: 'Imie10',
        surname: 'Nazwisko10',
        doctor: 1549753200000,
        train: 'grupa 3'
      },
      {
        id: 10,
        name: 'Imie11',
        surname: 'Nazwisko11',
        doctor: 1562796000000,
        train: 'grupa 2'
      },
      {
        id: 11,
        name: 'Imie12',
        surname: 'Nazwisko12',
        doctor: 1568152800000,
        train: 'grupa 4'
      }
    ],
    trainGroup: []
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

  delete = i => {
    const team = [...this.state.team];
    const index = team.findIndex(user => user.id === i);
    team.splice(index, 1);
    this.setState({
      team
    });
  };

  edit = i => {
    console.log('edit user' + i);
  };

  handleSort = i => {
    let sortMove = this.state.sortMove
    let team = [...this.state.team]
    switch (i) {
      case 3:
        team.sort((a, b) => ((sortMove ? a : b).doctor - (sortMove ? b : a).doctor));
        break;
      case 4:
        team.sort((a, b) => ((sortMove ? a : b).train - (sortMove ? b : a).train));
        break;
      case 5:
        team.sort((a, b) => ((sortMove ? a : b).kpp - (sortMove ? b : a).kpp));
        break;
      case 6:
        team.sort((a, b) => ((sortMove ? a : b).ground1 - (sortMove ? b : a).ground1));
        break;
      case 7:
        team.sort((a, b) => ((sortMove ? a : b).ground2 - (sortMove ? b : a).ground2));
        break;
      case 8:
        team.sort((a, b) => ((sortMove ? a : b).osrg1 - (sortMove ? b : a).osrg1));
        break;
      case 9:
        team.sort((a, b) => ((sortMove ? a : b).osrg2 - (sortMove ? b : a).osrg2));
        break;
      case 10:
        team.sort((a, b) => ((sortMove ? a : b).under1 - (sortMove ? b : a).under1));
        break;
      case 11:
        team.sort((a, b) => ((sortMove ? a : b).under2 - (sortMove ? b : a).under2));
        break;
      default:
        console.log('')
    }
    this.setState({
      sortMove: !sortMove,
      team
    })
  };

  toggleAddUser = () => {
    this.setState({
      addUser: !this.state.addUser
    })
  }

  addRescuer = (newRescuer) => {
    this.setState({
      team: [...this.state.team, newRescuer],
      addUser: !this.state.addUser
    })
  }
  render() {
    return (
      <div className='team'>
        {this.state.addUser ? <AddUser addRescuer={this.addRescuer} /> :
          <>
            <Table team={this.state.team} />
            <button onClick={this.toggleAddUser}>Dodaj ratownika</button>
          </>
        }


      </div>
    );
  }
}
