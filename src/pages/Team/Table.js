import React, { Component } from 'react';

import User from './User';
import AddUser from './AddUser';

import '../../styles/style.css';


class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btn: false,
    };
  }

  buttonChange = () => {
    let btn = this.state.btn;
    this.setState({
      btn: !btn
    });
  };

  
  render() {
    const btn = this.state.btn;
    const tableHeadValue = [
      '#', 'Imię', 'Nazwisko', 'Badania', 'Szkolenie', 'Termin KPP', 'Ćw. pow1', 'Ćw. pow2', 'Ćw. OSRG1', 'Ćw. OSRG2', 'Ćw. doł1', 'Ćw. doł2', 'Edycja'
    ];
    const tableHead = tableHeadValue.map((value, i) => (
      <th key={i} onClick={() => this.props.sort(i)}>
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
            <User team={this.props.team} edit={this.props.edit} delete={this.props.delete} />
            {btn ? (<AddUser team={this.props.team} change={this.props.handleChange} />) : null}
          </tbody>
        </table>
        <button onClick={btn ? this.props.handleSubmit : this.buttonChange}>{btn ? 'Zapisz' : 'Dodaj'}</button>
        
      </>
    );
  }
}

export default Table;
