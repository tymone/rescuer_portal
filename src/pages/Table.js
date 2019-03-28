import React, { Component } from 'react';

export default class Table extends Component {
  state = {
    date: new Date()
  }

  // getDate = (date) => {
  //   date = new Date(date)
  //   let day = date.getDay()
  //   let diff = date.getDate() - day + (day === 2 ? -6 : 1)
  //   return new Date(date.setDate(diff))


  // }

  render() {
    // const monday = this.getDate(new Date())

    const days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela']
    const headTable = days.map((day, i) => <th scope='col' key={i} colSpan='2'>{day}</th>)

    return (
      <table className='table table-bordered'>
        <thead>
          <tr>
            {headTable}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1a</th>
            <th>1b</th>
          </tr>

        </tbody>

      </table>
    )
  }
}
