import React from 'react';
import PropTypes from 'prop-types';

import TaskList from './TaskList';

import { StyledListWrapper } from './StyledReadTasks';

const ReadTasks = ({ tasksList }) => (
  <StyledListWrapper>
    <TaskList tasks={tasksList.filter((task) => task.status === 'to do')} title="do wykonania" />
    <TaskList
      tasks={tasksList.filter((task) => task.status === 'in progress')}
      title="w trakcie wykonywania"
    />
    <TaskList tasks={tasksList.filter((task) => task.status === 'done')} title="wykonane" />
  </StyledListWrapper>
);

ReadTasks.propTypes = {
  tasksList: PropTypes.array,
};
export default ReadTasks;
