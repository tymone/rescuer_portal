import React, { Component } from "react";

import '../../styles/style.css';

import Task from './Task';
import AddTask from './AddTask';

export default class Tasks extends Component {
  counter = 8
  state = {
    id: 0,
    title: '',
    value: '',
    active: false,
    tasks: [
      {
        id: 0,
        title: 'tytuł zadania do wykonania nr1',
        value: 'treść zadania do wykonania nr 1',
        active: true,
        addDate: '2019-01-01',
        finishDate: null,
      },
      {
        id: 12,
        title: 'tytuł zadania do wykonania nr2',
        value: 'treść zadania do wykonania nr 2',
        active: true,
        addDate: '2019-01-02',
        finishDate: null,
      },
      {
        id: 2,
        title: 'tytuł zadania do wykonania nr3',
        value: 'treść zadania do wykonania nr 3',
        active: true,
        addDate: '2019-01-03',
        finishDate: null,
      },
      {
        id: 3,
        title: 'tytuł zadania do wykonania nr4',
        value: 'treść zadania do wykonania nr 4',
        active: true,
        addDate: '2019-01-04',
        finishDate: null,
      },
      {
        id: 4,
        title: 'tytuł wykonanego zadania nr 1',
        value: 'treść wykonanego zadania nr 1',
        active: false,
        addDate: null,
        finishDate: '2019-01-05',
      },
      {
        id: 5,
        title: 'tytuł wykonanego zadania nr 2',
        value: 'treść wykonanego zadania nr 2',
        active: false,
        addDate: null,
        finishDate: '2019-01-06',
      },
      {
        id: 6,
        title: 'tytuł wykonanego zadania nr 3',
        value: 'treść wykonanego zadania nr 3',
        active: false,
        addDate: null,
        finishDate: '2019-01-07',
      },
      {
        id: 7,
        title: 'tytuł wykonanego zadania nr 4',
        value: 'treść wykonanego zadania nr 4',
        active: false,
        addDate: null,
        finishDate: '2019-01-08',
      },
    ],
  }

  toggleAddTask = () => {
    const btn = document.querySelector('.toggleDisplay')
    btn.style.display = 'block'
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  addTask = e => {
    e.preventDefault();

    const { title, value } = this.state
    if (title.length && value.length > 0) {

      const newTask = {
        id: this.counter,
        title: this.state.title,
        value: this.state.value,
        active: true,
        addDate: new Date().toLocaleString(),
        finishDate: null,
      }
      this.counter++

      this.setState(prevState => ({
        tasks: [...prevState.tasks, newTask],
        title: '',
        value: '',
      })
      )
    } else {
      alert('Brak wypełnionego formularza.')
    }

  }
  moveTaskToDone = (id) => {
    const date = new Date().toLocaleString();
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id)
    tasks[index].active = false
    tasks[index].finishDate = date
    this.setState({
      tasks
    })
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1);
    this.setState({
      tasks
    })
  }

  render() {
    return (
      <div className='TasksMain'>
        <h1>Lista zadań</h1>
        <div className="addTask">
          <button onClick={this.toggleAddTask}>Dodaj zadanie</button>
          <AddTask change={this.handleChange} addTask={this.addTask} title={this.state.title} value={this.state.value} />
        </div>
        <div className="toDo">
          <h2>do wykonania ({this.state.tasks.filter(task => task.active).length})</h2>
          <Task taskToDo={this.state.tasks.filter(task => task.active)} moveToDone={this.moveTaskToDone} deleteTask={this.deleteTask} />
        </div>
        <div className="done">
          <h2>wykonane ({this.state.tasks.filter(task => !task.active).length})</h2>
          <Task taskToDo={this.state.tasks.filter(task => !task.active)} deleteTask={this.deleteTask} />
        </div>
      </div>
    );
  }
}
