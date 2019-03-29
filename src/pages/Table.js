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
    const bodyShift = (time) => days.map(i => (<th scope='col' key={i} colSpan='2'>{time}</th>))

    //change bodyEmployee func to less better line, find fooking unique key for each...
    const bodyEmployee1 = [1, 2, 3, 4, 5]
    const bodyEmployee = (shift) => bodyEmployee1.map((body, i) => (
      <React.Fragment>
        <tr>
          <th scope='row' key={body + shift + i}>iksiński1</th>
          <td key={body + i}>Kowalski2</td>
          <td key={body + i}>Kowalski3</td>
          <td key={body + i}>Kowalski4</td>
          <td key={body + i}>Kowalski5</td>
          <td key={body + i}>Kowalski6</td>
          <td key={body + i}>Kowalski7</td>
          <td key={body + i}>Kowalski8</td>
          <td key={body + i}>Kowalski9</td>
          <td key={body + i}>Kowalski10</td>
          <td key={body + i}>Kowalski11</td>
          <td key={body + i}>Kowalski12</td>
          <td key={body + i}>Kowalski13</td>
          <td key={body + i}>Kowalski14</td>
        </tr>
      </React.Fragment>
    ))

    return (
      <table className='table table-bordered'>
        <thead>
          <tr>
            {headTable}
          </tr>
        </thead>
        <tbody>
          <tr>
            {bodyShift('6:30')}
          </tr>
          {bodyEmployee('1 shift')}
          <tr>
            {bodyShift('14:00')}
          </tr>
          {bodyEmployee('2 shift')}
          <tr>
            {bodyShift('21:30')}
          </tr>
          {bodyEmployee('3 shift')}
        </tbody>

      </table>
    )
  }
}
