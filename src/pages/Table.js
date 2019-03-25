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
    // console.log(monday);

    return (
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope='col' colSpan='2'></th>
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
