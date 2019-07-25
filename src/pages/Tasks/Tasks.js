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
    editValue: '',
    active: false,
    tasks: [
      {
        id: 0,
        title: 'tytuł zadania do wykonania nr1',
        value: 'treść zadania do wykonania nr 1',
        active: true,
        addDate: 1564048205997,
        finishDate: null,
      },
      {
        id: 12,
        title: 'tytuł zadania do wykonania nr2',
        value: 'treść zadania do wykonania nr 2',
        active: true,
        addDate: 1564048305997,
        finishDate: null,
      },
      {
        id: 2,
        title: 'tytuł zadania do wykonania nr3',
        value: 'treść zadania do wykonania nr 3',
        active: true,
        addDate: 1564048405997,
        finishDate: null,
      },
      {
        id: 3,
        title: 'tytuł zadania do wykonania nr4',
        value: 'treść zadania do wykonania nr 4',
        active: true,
        addDate: 1564047505997,
        finishDate: null,
      },
      {
        id: 4,
        title: 'tytuł wykonanego zadania nr 1',
        value: 'treść wykonanego zadania nr 1',
        active: false,
        addDate: null,
        finishDate: 1563048505997,
      },
      {
        id: 5,
        title: 'tytuł wykonanego zadania nr 2',
        value: 'treść wykonanego zadania nr 2',
        active: false,
        addDate: null,
        finishDate: 1562048505997,
      },
      {
        id: 6,
        title: 'tytuł wykonanego zadania nr 3',
        value: 'treść wykonanego zadania nr 3',
        active: false,
        addDate: null,
        finishDate: 1561048505997,
      },
      {
        id: 7,
        title: 'tytuł wykonanego zadania nr 4',
        value: 'treść wykonanego zadania nr 4',
        active: false,
        addDate: null,
        finishDate: 1264048505997,
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
        addDate: new Date().getTime(),
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
    const date = new Date().getTime();
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

  toggleTask = (id, className) => {
    let task = document.querySelector(`.${className} li:nth-child(${id}) div`)
    task.classList.toggle('on')
  }

  editTask = (id) => {
    let task = document.querySelector(`.toDo li:nth-child(${id}) div.toggle-p`)
    let taskEdit = document.querySelector(`.toDo li:nth-child(${id}) div.toggle-textarea`)
    task.classList.toggle('off')
    taskEdit.classList.toggle('show')
  }

  saveEdit = i => {
    let tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id === i)
    tasks[index].value = this.state.editValue
    this.setState({
      tasks
    })
    alert('zapisano zmiany')
  }

  render() {
    let tasks = this.state.tasks
    let active = tasks.filter(task => task.active)
    let done = tasks.filter(task => !task.active)

    done.sort((a, b) => (b.finishDate - a.finishDate))
    active.sort((a, b) => (a.addDate - b.addDate))
    return (
      <div className='TasksMain'>
        <h1>Lista zadań</h1>
        <div className="addTask">
          <button onClick={this.toggleAddTask}>Dodaj zadanie</button>
          <AddTask change={this.handleChange} addTask={this.addTask} title={this.state.title} value={this.state.value} />
        </div>
        <div className="toDo">
          <h2>do wykonania ({active.length})</h2>
          <ul>
            {active.length ? active.map((task, i) => (
              <Task
                key={task.id}
                i={i}
                date={task.addDate}
                task={task}
                moveToDone={this.moveTaskToDone}
                deleteTask={this.deleteTask}
                toggleTask={this.toggleTask}
                toggle={this.state.toggle}
                edit={this.editTask}
                saveEdit={this.saveEdit}
                handleChange={this.handleChange} />
            )) : 'Brak zadań.'}
          </ul>
        </div>
        <div className="done">
          <h2>wykonane ({done.length})</h2>
          <ul>
            {done.length ? done.map((task, i) => (
              <Task
                key={task.id}
                i={i}
                task={task}
                date={task.finishDate}
                moveToDone={this.moveTaskToDone}
                deleteTask={this.deleteTask}
                toggleTask={this.toggleTask}
              />
            )) : 'Brak zadań.'}
          </ul>
        </div>
      </div>
    );
  }
}
