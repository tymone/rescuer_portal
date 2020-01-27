import React from 'react';

import Task from './Task';

const TaskList = ({ tasks, title }) => {
  const tasksList = tasks => {
    if (tasks.length) {
      tasks.sort((a, b) => b.addDate - a.addDate);
      return tasks.map((task, i) => <Task key={task.id} task={task} id={i + 1} />);
    } else {
      return 'Brak zadań.';
    }
  };

  return (
    <div className="taskList">
      <h2>{title}</h2>
      <ul>{tasksList(tasks)}</ul>
    </div>
  );
};

export default TaskList;
