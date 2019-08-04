import React, { Component } from 'react';

import User from './User';
import AddUser from './AddUser';

import '../../styles/style.css';


class Table extends Component {
  state = {
    btn: false,
  };


  buttonChange = () => {
    let btn = this.state.btn;
    this.setState({
      btn: !btn
    });
  };


  render() {
    const btn = this.state.btn;
    const { sort, team, edit, deleteUser, handleChange, handleSubmit } = this.props
    const tableHeadValue = [
      '#', 'Imię', 'Nazwisko', 'Badania', 'Szkolenie', 'Termin KPP', 'Ćw. pow1', 'Ćw. pow2', 'Ćw. OSRG1', 'Ćw. OSRG2', 'Ćw. doł1', 'Ćw. doł2', 'Edycja'
    ];
    const tableHead = tableHeadValue.map((value, i) => (
      <th key={i} onClick={() => sort(i)}>
        {value}{this.state.sortMove ? <i className="fas fa-sort-up"></i> : <i className="fas fa-sort-down"></i>}
      </th>
    ));
    return (
      <>
        <table className='team'>
          <thead>
            <tr>{tableHead}</tr>
          </thead>
          <tbody>
            <User team={team} edit={edit} delete={deleteUser} />
            {btn ? (<AddUser team={team} change={handleChange} />) : null}
          </tbody>
        </table>
        <button onClick={btn ? handleSubmit : this.buttonChange}>{btn ? 'Zapisz' : 'Dodaj'}</button>

      </>
    );
  }
}

export default Table;
