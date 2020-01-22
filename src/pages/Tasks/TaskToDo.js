import React from 'react';

import Task from './Task';

const TaskToDo = ({ tasks }) => {
  const tasksList = tasks => {
    if (tasks.length) {
      tasks.sort((a, b) => b.addDate - a.addDate);
      return tasks.map((task, i) => <Task key={task.id} task={task} id={i + 1} />);
    } else {
      return 'Brak zadań.';
    }
  };

  return (
    <div className="todo">
      <h2>Do wykonania</h2>
      <ul>{tasksList(tasks)}</ul>
    </div>
  );
};

export default TaskToDo;
