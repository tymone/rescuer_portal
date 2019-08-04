import React from 'react';

import '../../styles/style.css';

const Task = ({ task, toggleTask, i, date, moveToDone, deleteTask, edit, handleChange, saveEdit }) => {

  return (
    <>
      <li key={task.id}>
        <span onClick={() => toggleTask(i + 1, task.active ? 'toDo' : 'done')}>{task.title}({new Date(date).toLocaleString().slice(0, 10)})</span>
        <i className="fas fa-arrow-right" onClick={() => moveToDone(task.id)}></i>
        <i className="fas fa-trash" onClick={() => deleteTask(task.id)}></i>
        <div className='toggle'>
          <div className='toggle-p'>
            <p>{task.value}</p>
            {task.active ? <i className="fas fa-edit" onClick={() => edit(i + 1)}></i> : null}
          </div>
          <div className='toggle-textarea'>
            <textarea defaultValue={task.value} name='editValue' onChange={handleChange}></textarea>
            <i className="fas fa-check" onClick={() => saveEdit(task.id, i + 1)}></i>
          </div>

        </div>
      </li >
    </>
  )
}
export default Task;

