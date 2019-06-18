import React, { Component } from "react";

import '../styles/style.css';

export default class ToDo extends Component {
  render() {
    return (
      <div className='ToDo'>
        <h1>Lista zadań</h1>
        <table>
          <thead>
            <tr>
              <td>do Wykonania</td>
              <td>Wykonane</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aspernatur ab asperiores aliquam delectus neque pariatur consequatur necessitatibus cumque eum ratione sed itaque suscipit quod temporibus accusantium autem praesentium quas?</td>
              <td>
                jakieś wykonane zadanie
            </td>
            </tr>
          </tbody>

        </table>
      </div>
    );
  }
}
