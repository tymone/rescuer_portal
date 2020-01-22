import React from 'react';

import Task from './Task';

const TaskDone = ({ tasks }) => {
  const tasksList = tasks => {
    if (tasks.length) {
      tasks.sort((a, b) => b.finishDate - a.finishDate);
      return tasks.map((task, i) => <Task key={task.id} task={task} id={i + 1} />);
    } else {
      return 'Brak zadań.';
    }
  };

  return (
    <div className="done">
      <h2>Wykonane</h2>
      <ul>{tasksList(tasks)}</ul>
    </div>
  );
};

export default TaskDone;
