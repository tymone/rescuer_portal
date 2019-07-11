import React from 'react';

import '../../styles/style.css';

const Task = props => {

  let tasks = props.tasks
  let active = tasks.filter(task => task.active)
  let done = tasks.filter(task => !task.active)

  return (
    <>
      <div className="toDo">
        <h2>do wykonania ({active.length})</h2>
        <ul>
          {active.length ? active.map((item, i) => (
            <li key={item.id}>
              <span onClick={() => props.toggleTask(i + 1, 'toDo')}>{item.title}({item.addDate})</span>
              <i className="fas fa-bars" onClick={() => props.edit(item.id)}></i>
              <i className="fas fa-arrow-right" onClick={() => props.moveToDone(item.id)}></i>
              <i className="fas fa-trash" onClick={() => props.deleteTask(item.id)}></i>
              <div><p>{item.value}</p></div>
            </li >
          )) : 'Brak zadań.'}
        </ul>
      </div>
      <div className="done">
        <h2>wykonane ({done.length})</h2>
        <ul>
          {done.length ? done.map((item, i) => (
            <li key={item.id}>
              <span onClick={() => props.toggleTask(i + 1, 'done')}>{item.title} ({item.finishDate})</span>
              <i className="fas fa-bars" onClick={() => props.edit(item.id)}></i>
              <i className="fas fa-trash" onClick={() => props.deleteTask(item.id)}></i>
              <div><p>{item.value}</p></div>
            </li>
          )) : 'Brak zadań.'}
        </ul>
      </div>
    </>
  )
}
export default Task;