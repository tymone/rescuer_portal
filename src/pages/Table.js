import React from 'react';
import '../styles/table.css'

const week = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela']


const Table = (props) => {

  const days = week.map((day, i) => (<th scope='col' colSpan='2' key={i}>{day}</th >))
  const shift = (time) => (week.map((shift, i) => <th scope='row' colSpan='2' key={i}>{time}</th>))

  const employee = (row, shift) => (week.map((day, i) => (
    <React.Fragment key={i}>
      <td scope='row' key={day + row + shift}>Kowalski 1</td>
      <td key={day + row + shift + 2}>Kowalski 2</td>
    </React.Fragment>)))





  return (
    <React.Fragment>
      <p>{props.date}</p>
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
          <tr className='bold'>
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
          <tr className='bold'>
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
          <tr className='bold'>
            {employee(5, 3)}
          </tr>
          <tr>
            <th scope='row' colSpan='14'>Osoby poza obłożeniem: </th>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}
export default Table