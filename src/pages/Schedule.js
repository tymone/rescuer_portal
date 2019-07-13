import React, { Component } from 'react';

import '../styles/style.css';

class Schedule extends Component {
  state = {};

  date = () => {
    let day = new Date();
    let date = new Date(day).toLocaleDateString();
    let startWeek = day - day;
    console.log(date);
    return String(date);
  };

  render() {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>{this.date()}</h1>
        <table className='schedule'>
          <thead>
            <tr>
              <th style={{ border: '2px solid black' }} colSpan='2'>
                Poniedziałek
              </th>
              <th style={{ border: '2px solid black' }} colSpan='2'>
                Wtorek
              </th>
              <th style={{ border: '2px solid black' }} colSpan='2'>
                Środa
              </th>
              <th style={{ border: '2px solid black' }} colSpan='2'>
                Czwartek
              </th>
              <th style={{ border: '2px solid black' }} colSpan='2'>
                Piątek
              </th>
              <th style={{ border: '2px solid black' }} colSpan='2'>
                Sobota
              </th>
              <th style={{ border: '2px solid black' }} colSpan='2'>
                Niedziela
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan='2'>6:30</td>
              <td colSpan='2'>6:30</td>
              <td colSpan='2'>6:30</td>
              <td colSpan='2'>6:30</td>
              <td colSpan='2'>6:30</td>
              <td colSpan='2'>6:30</td>
              <td colSpan='2'>6:30</td>
            </tr>
            <tr className='userColumn'>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
            </tr>
            <tr>
              <td colSpan='2'>14:00</td>
              <td colSpan='2'>14:00</td>
              <td colSpan='2'>14:00</td>
              <td colSpan='2'>14:00</td>
              <td colSpan='2'>14:00</td>
              <td colSpan='2'>14:00</td>
              <td colSpan='2'>14:00</td>
            </tr>
            <tr className='userColumn'>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
            </tr>
            <tr>
              <td colSpan='2'>21:30</td>
              <td colSpan='2'>21:30</td>
              <td colSpan='2'>21:30</td>
              <td colSpan='2'>21:30</td>
              <td colSpan='2'>21:30</td>
              <td colSpan='2'>21:30</td>
              <td colSpan='2'>21:30</td>
            </tr>
            <tr className='userColumn'>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Schedule;
