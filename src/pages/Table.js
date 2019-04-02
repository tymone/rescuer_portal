import React from 'react';

const week = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela']


const Table = () => {

  const days = week.map((day, i) => (<th scope='col' colSpan='2' key={i}>{day}</th >))
  const shift = (time) => (week.map((shift, i) => <th scope='row' colSpan='2' key={i}>{time}</th>))

  const employee = (row, shift) => (week.map((day, i) => (
    <React.Fragment key={i}>
      <th scope='row' style={{ fontWeight: 'normal' }} key={day + row + shift}>Kowalski 1</th>
      <td key={day + row + shift + 2}>Kowalski 2</td>
    </React.Fragment>)))





  return (
    <React.Fragment>
      <p>01.04-08.04</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            {days}
          </tr>
        </thead>
        <tbody>
          <tr>
            {shift('6:30')}
          </tr>
          <tr>
            {employee(1, 1)}
          </tr>
          <tr>
            {employee(2, 1)}
          </tr>
          <tr>
            {employee(3, 1)}
          </tr>
          <tr>
            {employee(4, 1)}
          </tr>
          <tr>
            {employee(5, 1)}
          </tr>
          <tr>
            {shift('14:00')}
          </tr>
          <tr>
            {employee(1, 2)}
          </tr>
          <tr>
            {employee(2, 2)}
          </tr>
          <tr>
            {employee(3, 2)}
          </tr>
          <tr>
            {employee(4, 2)}
          </tr>
          <tr>
            {employee(5, 2)}
          </tr>
          <tr>
            {shift('21:30')}
          </tr>
          <tr>
            {employee(1, 3)}
          </tr>
          <tr>
            {employee(2, 3)}
          </tr>
          <tr>
            {employee(3, 3)}
          </tr>
          <tr>
            {employee(4, 3)}
          </tr>
          <tr>
            {employee(5, 3)}
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}
export default Table