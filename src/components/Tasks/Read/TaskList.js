import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

import { StyledTaskList, StyledTaskListTitle } from './StyledReadTasks';

const TaskList = ({ tasks, title }) => {
  const tasksList = (tasks) => {
    if (tasks.length !== 0) {
      tasks.sort((a, b) => a.addDate - b.addDate);
      return tasks.map((task) => <Task key={task.id} task={task} />);
    }
    return <p>Brak zadań.</p>;
  };

  return (
    <StyledTaskList>
      <StyledTaskListTitle>{title}</StyledTaskListTitle>
      <ul>{tasksList(tasks)}</ul>
    </StyledTaskList>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  title: PropTypes.string,
};
export default TaskList;
