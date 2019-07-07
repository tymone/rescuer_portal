import React from 'react';

import '../styles/style.css';

const Task = props => {


  let taskToDo = props.taskToDo
  let task = taskToDo.map((item) => (
    <li key={item.id}>
      {item.title} <span>({item.active ? item.addDate : item.finishDate})</span>
      {item.active ? < i className="fas fa-arrow-right" onClick={() => props.moveToDone(item.id)}></i> : null}
      <i className="fas fa-trash" onClick={() => props.deleteTask(item.id)}></i>
    </li >
  ))
  return (
    <ul>
      {task.length ? task : 'Brak zadań.'}
    </ul>
  )
}
export default Task;