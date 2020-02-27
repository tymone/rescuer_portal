import React from 'react';

import Task from './Task';

const TaskList = ({ tasks, title }) => {
  const tasksList = tasks => {
    if (tasks.length) {
      tasks.sort((a, b) => a.addDate - b.addDate);
      return tasks.map(task => <Task key={task.id} task={task} />);
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
