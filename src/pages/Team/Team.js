import React, { Component } from 'react';
import Table from './Table';
// import axios from 'axios';

import '../../styles/style.css';

export default class Team extends Component {
  state = {
    team: [
      {
        id: 0,
        name: 'Imie1',
        surname: 'Nazwisko1',
        doctor: '01.01.2019',
        train: '02.01.2019',
        kpp: '03.01.2019',
        ground1: '04.01.2019',
        ground2: '05.01.2019',
        osrg1: '06.06.2019',
        osrg2: '07.07.2019',
        under1: '08.08.2019',
        under2: '09.09.2019'
      },
      {
        id: 1,
        name: 'Imie2',
        surname: 'Nazwisko2',
        doctor: '01.02.2019',
        train: '02.02.2019',
        kpp: '03.02.2019',
        ground1: '04.02.2019',
        ground2: '05.02.2019',
        osrg1: '06.02.2019',
        osrg2: '07.02.2019',
        under1: '08.02.2019',
        under2: '09.02.2019'
      },
      {
        id: 2,
        name: 'Imie3',
        surname: 'Nazwisko3',
        doctor: '01.03.2019',
        train: '02.03.2019',
        kpp: '03.03.2019',
        ground1: '04.03.2019',
        ground2: '05.03.2019',
        osrg1: '06.03.2019',
        osrg2: '07.03.2019',
        under1: '08.03.2019',
        under2: '09.03.2019'
      },
      {
        id: 3,
        name: 'Imie4',
        surname: 'Nazwisko4',
        doctor: '01.04.2019',
        train: '02.04.2019',
        kpp: '03.04.2019',
        ground1: '04.04.2019',
        ground2: '05.04.2019',
        osrg1: '06.04.2019',
        osrg2: '07.04.2019',
        under1: '08.04.2019',
        under2: '09.04.2019'
      },
      {
        id: 4,
        name: 'Imie5',
        surname: 'Nazwisko5',
        doctor: '01.05.2019',
        train: '02.05.2019',
        kpp: '03.05.2019',
        ground1: '04.05.2019',
        ground2: '05.05.2019',
        osrg1: '06.05.2019',
        osrg2: '07.05.2019',
        under1: '08.05.2019',
        under2: '09.05.2019'
      },
      {
        id: 5,
        name: 'Imie6',
        surname: 'Nazwisko6',
        doctor: '01.06.2019',
        train: '02.06.2019',
        kpp: '03.06.2019',
        ground1: '04.06.2019',
        ground2: '05.06.2019',
        osrg1: '06.06.2019',
        osrg2: '07.06.2019',
        under1: '08.06.2019',
        under2: '09.06.2019'
      },
      {
        id: 6,
        name: 'Imie7',
        surname: 'Nazwisko7',
        doctor: '01.07.2019',
        train: '02.07.2019',
        kpp: '03.07.2019',
        ground1: '04.07.2019',
        ground2: '05.07.2019',
        osrg1: '06.07.2019',
        osrg2: '07.07.2019',
        under1: '08.07.2019',
        under2: '09.07.2019'
      },
      {
        id: 7,
        name: 'Imie8',
        surname: 'Nazwisko8',
        doctor: '01.08.2019',
        train: '02.08.2019',
        kpp: '03.08.2019',
        ground1: '04.08.2019',
        ground2: '05.08.2019',
        osrg1: '06.08.2019',
        osrg2: '07.08.2019',
        under1: '08.08.2019',
        under2: '09.08.2019'
      },
      {
        id: 8,
        name: 'Imie9',
        surname: 'Nazwisko9',
        doctor: '01.09.2019',
        train: '02.09.2019',
        kpp: '03.09.2019',
        ground1: '04.09.2019',
        ground2: '05.09.2019',
        osrg1: '06.09.2019',
        osrg2: '07.09.2019',
        under1: '08.09.2019',
        under2: '09.09.2019'
      },
      {
        id: 9,
        name: 'Imie10',
        surname: 'Nazwisko10',
        doctor: '01.10.2019',
        train: '02.10.2019',
        kpp: '03.10.2019',
        ground1: '04.10.2019',
        ground2: '05.10.2019',
        osrg1: '06.10.2019',
        osrg2: '07.10.2019',
        under1: '08.10.2019',
        under2: '09.10.2019'
      },
      {
        id: 10,
        name: 'Imie11',
        surname: 'Nazwisko11',
        doctor: '01.11.2019',
        train: '02.11.2019',
        kpp: '03.11.2019',
        ground1: '04.11.2019',
        ground2: '05.11.2019',
        osrg1: '06.11.2019',
        osrg2: '07.11.2019',
        under1: '08.11.2019',
        under2: '09.11.2019'
      },
      {
        id: 11,
        name: 'Imie12',
        surname: 'Nazwisko12',
        doctor: '01.12.2019',
        train: '02.12.2019',
        kpp: '03.12.2019',
        ground1: '04.12.2019',
        ground2: '05.12.2019',
        osrg1: '06.12.2019',
        osrg2: '07.12.2019',
        under1: '08.12.2019',
        under2: '09.12.2019'
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
  // componentDidUpdate = () => { -albo Will update <-- sprawdzić
  // axios
  //   .post('http://localhost:5000/druzyna', newRescuer)
  //   .then(res => console.log(res.data))
  // this.setState({
  //   btn: !this.state.btn
  // });
  // alert('Pomyślnie dodano ratownika do bazy.')
  // };

  render() {
    return (
      <React.Fragment>
        <Table team={this.state.team} />
      </React.Fragment>
    );
  }
}
