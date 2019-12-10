import React, { Component } from 'react';

import Table from './Table.js';
import UnderTable from './UnderTable.js';


export default class Form extends Component {
  state ={
    schedule: [],
    dateFrom: '',
    dateTo: '',
  }

  componentDidMount() {
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render(){
    return(
      <div className="schedule">
        <span>Harmonogram od:</span>
        <input name="dateFrom" onChange={this.handleChange} type="date" required />
        <span>do:</span>
        <input name="dateTo" onChange={this.handleChange} type="date" required/>
        <Table />
        <UnderTable />
        <button onClick={this.handleSubmit}>Zapisz</button>
      </div>
    )
  }

}