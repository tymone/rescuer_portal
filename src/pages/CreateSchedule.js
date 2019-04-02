import React, { Component } from 'react';

export default class CreateSchedule extends Component {
  state = {
    date: [],
    week: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela']

  }

  submit = () => {
    console.log('działa')
  }


  render() {
    return (
      <form onSubmit={this.submit}>
        <p>Od:<input type="date" />, Do: <input type="date" /></p>
        <p>form or table with input for employe for each day and shift.</p>


      </form>
    )
  }
}
