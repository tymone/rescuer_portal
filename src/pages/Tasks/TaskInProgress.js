import React from 'react';

import Task from './Task';

const TaskInProgress = ({ tasks }) => {
  const tasksList = tasks => {
    if (tasks.length) {
      tasks.sort((a, b) => b.addDate - a.addDate);
      return tasks.map((task, i) => <Task key={task.id} task={task} id={i + 1} />);
    } else {
      return 'Brak zadań.';
    }
  };

  return (
    <div className="inProgress">
      <h2>W trakcie</h2>
      <ul>{tasksList(tasks)}</ul>
    </div>
  );
};

export default TaskInProgress;
