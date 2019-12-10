import React from 'react';

const Task = ({ task, id, className }) => {
  
  const getTask = task

  const showTaskContent = (id, className) => {
    let task = document.querySelector(`.${className} li:nth-child(${id}) div`)
    task.classList.toggle('on')
  }

  return (
    <li>
      <span onClick={()=> showTaskContent(id, className)}>
        {getTask.title}
      </span>
      <div className="toggle">
        <div className="toggle-p">
          <p>{getTask.content}</p>
        </div>
      </div>
    </li>
  )
}
export default Task;

