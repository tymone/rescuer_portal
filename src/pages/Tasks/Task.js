import React from 'react';

import '../../styles/style.css';

const Task = props => {

  return (
    <>
      <li key={props.task.id}>
        <span onClick={() => props.toggleTask(props.i + 1, props.task.active ? 'toDo' : 'done')}>{props.task.title}({new Date(props.date).toLocaleString().slice(0, 10)})</span>
        <i className="fas fa-arrow-right" onClick={() => props.moveToDone(props.task.id)}></i>
        <i className="fas fa-trash" onClick={() => props.deleteTask(props.task.id)}></i>
        <div className='toggle'>
          <div className='toggle-p'>
            <p>{props.task.value}</p>
            {props.task.active ? <i className="fas fa-edit" onClick={() => props.edit(props.i + 1)}></i> : null}
          </div>
          <div className='toggle-textarea'>
            <textarea defaultValue={props.task.value} name='editValue' onChange={props.handleChange}></textarea>
            <i className="fas fa-check" onClick={() => props.saveEdit(props.task.id, props.i + 1)}></i>
          </div>

        </div>
      </li >
    </>
  )
}
export default Task;

