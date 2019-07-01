import React, { Component } from "react";

import '../styles/style.css';

import Task from './Task';

export default class Tasks extends Component {
  state = {
    index: '',
    title: '',
    value: '',
    priority: '',
    toDo: [
      {
        index: 0,
        title: 'zadanie do wykonania nr1',
        value: 'treść zadania do wykonania nr 1',
        priority: 'toDo'
      },
      {
        index: 1,
        title: 'zadanie do wykonania nr2',
        value: 'treść zadania do wykonania nr 2',
        priority: 'toDo'
      },
      {
        index: 2,
        title: 'zadanie do wykonania nr3',
        value: 'treść zadania do wykonania nr 3',
        priority: 'toDo'
      },
      {
        index: 3,
        title: 'zadanie do wykonania nr4',
        value: 'treść zadania do wykonania nr 4',
        priority: 'toDo'
      },
      {
        index: 4,
        title: 'tytuł zadania nr 1 w trakcie wykonywania',
        value: 'treść zadania nr 1 w trakcie wykonywania',
        priority: 'inProgress'
      },
      {
        index: 5,
        title: 'tytuł zadania nr 2 w takcie wykonywania',
        value: 'treść zadania nr 2 w trakcie wykonywania',
        priority: 'inProgress'
      },
      {
        index: 6,
        title: 'tytuł zadania nr 3 w trakcie wykonywania',
        value: 'treść zadania nr 3 w trakcie wykonywania',
        priority: 'inProgress'
      },
      {
        index: 7,
        title: 'tytuł zadania nr 4 w trakcie wykonywania',
        value: 'treść zadania nr 4 w trakcie wykonywania',
        priority: 'inProgress'
      },
      {
        index: 8,
        title: 'tytuł wykonanego zadania nr 1',
        value: 'treść wykonanego zadania nr 1',
        priority: 'done'
      },
      {
        index: 9,
        title: 'tytuł wykonanego zadania nr 2',
        value: 'treść wykonanego zadania nr 2',
        priority: 'done'
      },
      {
        index: 10,
        title: 'tytuł wykonanego zadania nr 3',
        value: 'treść wykonanego zadania nr 3',
        priority: 'done'
      },
      {
        index: 11,
        title: 'tytuł wykonanego zadania nr 4',
        value: 'treść wykonanego zadania nr 4',
        priority: 'done'
      },],
  }

  toggleAddTask = () => {
    const btn = document.querySelector('.toggleDisplay')
    btn.style.display = 'block'
  }
  addTask = (e) => {
    e.preventDefault()

  }
  render() {
    return (
      <div className='TasksMain'>
        <h1>Lista zadań</h1>
        <div className="addTask">
          <button onClick={this.toggleAddTask}>Dodaj zadanie</button>
          <label className='toggleDisplay'>
            <input type="text" placeholder='Wpisz treść...' />
            <button onClick={this.addTask}>Zapisz</button>
          </label>
        </div>
        <div className="toDo">
          <h2>do wykonania</h2>
          {/* <Task list={this.state.toDo} /> */}
        </div>
        <div className="inProgress">
          <h2>w trakcie</h2>
          {/* <Task list={this.state.toDo} /> */}
        </div>
        <div className="done">
          <h2>wykonane</h2>
          {/* <Task list={this.state.toDo} /> */}
        </div>
      </div>
    );
  }
}
