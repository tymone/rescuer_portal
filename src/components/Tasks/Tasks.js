import React from 'react';
import { connect } from 'react-redux';

import { StyledListWrapper } from './StyledTasks';

import TaskList from './Read/TaskList';

const Tasks = ({ tasks }) => {
  return (
    <>
      <h1>Lista zadań</h1>
      <StyledListWrapper>
        <TaskList tasks={tasks.filter((task) => task.status === 'to do')} title="do wykonania" />
        <TaskList tasks={tasks.filter((task) => task.status === 'in progress')} title="w trakcie wykonywania" />
        <TaskList tasks={tasks.filter((task) => task.status === 'done')} title="wykonane" />
      </StyledListWrapper>
    </>
  );
};

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks.list,
});
export default connect(mapStateToProps)(Tasks);
