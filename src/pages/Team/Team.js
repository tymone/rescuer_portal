import React, { Component } from 'react';
import Table from './Table';
// import axios from 'axios';

import '../../styles/style.css';

export default class Team extends Component {
  counter = 12
  state = {
    sortMove: true,
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
        id: 0,
        name: 'Imie1',
        surname: 'Nazwisko1',
        doctor: 1546297200000,
        train: 1548975600000,
        kpp: 1551394800000,
        ground1: 1554069600000,
        ground2: 1556661600000,
        osrg1: 1559772000000,
        osrg2: 1562450400000,
        under1: 1565215200000,
        under2: 1567980000000
      },
      {
        id: 1,
        name: 'Imie2',
        surname: 'Nazwisko2',
        doctor: 1546383600000,
        train: 1549062000000,
        kpp: 1551481200000,
        ground1: 1554156000000,
        ground2: 1556748000000,
        osrg1: 1559426400000,
        osrg2: 1562018400000,
        under1: 1564696800000,
        under2: 1567375200000
      },
      {
        id: 2,
        name: 'Imie3',
        surname: 'Nazwisko3',
        doctor: 1546470000000,
        train: 1549148400000,
        kpp: 1551567600000,
        ground1: 1554242400000,
        ground2: 1556834400000,
        osrg1: 1559512800000,
        osrg2: 1562104800000,
        under1: 1564783200000,
        under2: 1567461600000
      },
      {
        id: 3,
        name: 'Imie4',
        surname: 'Nazwisko4',
        doctor: 1546556400000,
        train: 1549234800000,
        kpp: 1554328800000,
        ground1: 1556920800000,
        ground2: 1559599200000,
        osrg1: 1562191200000,
        osrg2: 1564869600000,
        under1: 1567548000000,
        under2: 1546642800000
      },
      {
        id: 4,
        name: 'Imie5',
        surname: 'Nazwisko5',
        doctor: 1549321200000,
        train: 1551740400000,
        kpp: 1554415200000,
        ground1: 1557007200000,
        ground2: 1559685600000,
        osrg1: 1562277600000,
        osrg2: 1564956000000,
        under1: 1567634400000,
        under2: 1546729200000
      },
      {
        id: 5,
        name: 'Imie6',
        surname: 'Nazwisko6',
        doctor: 1549407600000,
        train: 1551826800000,
        kpp: 1554501600000,
        ground1: 1557093600000,
        ground2: 1559772000000,
        osrg1: 1562364000000,
        osrg2: 1565042400000,
        under1: 1567720800000,
        under2: 1546815600000
      },
      {
        id: 6,
        name: 'Imie7',
        surname: 'Nazwisko7',
        doctor: 1549494000000,
        train: 1551913200000,
        kpp: 1554588000000,
        ground1: 1557180000000,
        ground2: 1559858400000,
        osrg1: 1562450400000,
        osrg2: 1565128800000,
        under1: 1567807200000,
        under2: 1546902000000
      },
      {
        id: 7,
        name: 'Imie8',
        surname: 'Nazwisko8',
        doctor: 1549580400000,
        train: 1551999600000,
        kpp: 1554674400000,
        ground1: 1557266400000,
        ground2: 1559944800000,
        osrg1: 1562536800000,
        osrg2: 1565215200000,
        under1: 1567893600000,
        under2: 1546988400000
      },
      {
        id: 8,
        name: 'Imie9',
        surname: 'Nazwisko9',
        doctor: 1549666800000,
        train: 1552086000000,
        kpp: 1554760800000,
        ground1: 1557352800000,
        ground2: 1560031200000,
        osrg1: 1562623200000,
        osrg2: 1565301600000,
        under1: 1567980000000,
        under2: 1547074800000
      },
      {
        id: 9,
        name: 'Imie10',
        surname: 'Nazwisko10',
        doctor: 1549753200000,
        train: 1552172400000,
        kpp: 1554847200000,
        ground1: 1547161200000,
        ground2: 1549839600000,
        osrg1: 1552258800000,
        osrg2: 1554933600000,
        under1: 1557525600000,
        under2: 1560204000000
      },
      {
        id: 10,
        name: 'Imie11',
        surname: 'Nazwisko11',
        doctor: 1562796000000,
        train: 1565474400000,
        kpp: 1568152800000,
        ground1: 1547247600000,
        ground2: 1549926000000,
        osrg1: 1552345200000,
        osrg2: 1555020000000,
        under1: 1557612000000,
        under2: 1560290400000
      },
      {
        id: 11,
        name: 'Imie12',
        surname: 'Nazwisko12',
        doctor: 1568152800000,
        train: 1565474400000,
        kpp: 1547247600000,
        ground1: 1552345200000,
        ground2: 1557612000000,
        osrg1: 1560290400000,
        osrg2: 1562882400000,
        under1: 1565560800000,
        under2: 1568239200000
      }
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      name, surname, doctor, train, kpp, ground1, ground2, osrg1, osrg2, under1, under2
    } = this.state;
    const id = this.counter;
    if (name && surname && doctor && train && kpp && ground1 && ground2 && osrg1 && osrg2 && under1 && under2) {
      const newRescuer = { 
        id, 
        name, 
        surname, 
        doctor: new Date(doctor).getTime(), 
        train : new Date(train).getTime(),
        kpp : new Date(kpp).getTime(),
        ground1: new Date(ground1).getTime(), 
        ground2: new Date(ground2).getTime(),
        osrg1: new Date(osrg1).getTime(),
        osrg2: new Date(osrg2).getTime(),
        under1 : new Date(under1).getTime(),
        under2 : new Date(under2).getTime(),
        };
      this.setState({
        team: [...this.state.team, newRescuer],
        btn: false
      });
      this.counter++;
    } else {
      alert('Nie wszystkie pola zostały wypełnione');
      
    }
  };

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
      team.sort((a, b) => ((sortMove? a : b).doctor - (sortMove? b : a).doctor));
      break;
      case 4:
      team.sort((a, b) => ((sortMove? a : b).train - (sortMove? b : a).train));
      break;
      case 5:
      team.sort((a, b) => ((sortMove? a : b).kpp - (sortMove? b : a).kpp));
      break;
      case 6:
      team.sort((a, b) => ((sortMove? a : b).ground1 - (sortMove? b : a).ground1));
      break;
      case 7:
      team.sort((a, b) => ((sortMove? a : b).ground2 - (sortMove? b : a).ground2));
      break;
      case 8:
      team.sort((a, b) => ((sortMove? a : b).osrg1 - (sortMove? b : a).osrg1));
      break;
      case 9:
      team.sort((a, b) => ((sortMove? a : b).osrg2 - (sortMove? b : a).osrg2));
      break;
      case 10:
      team.sort((a, b) => ((sortMove? a : b).under1 - (sortMove? b : a).under1));
      break;
      case 11:
      team.sort((a, b) => ((sortMove? a : b).under2 - (sortMove? b : a).under2));
      break;
      default:
      console.log('')}    
    this.setState({
      sortMove: !sortMove,
      team
    })
  };
  render() {
    return (
      <React.Fragment>
        <Table team={this.state.team} handleChange={this.handleChange} handleSubmit={this.handleSubmit} delete={this.delete} edit={this.edit} sort={this.handleSort}/>
      </React.Fragment>
    );
  }
}
