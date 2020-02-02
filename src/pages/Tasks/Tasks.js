import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import TaskList from './TaskList';

const Tasks = ({ tasks }) => {
  return (
    <div className="Tasks">
      <h1>Lista zadań</h1>
      <div className="options">
        <Link to="/zadania/dodaj">
          <i className="far fa-plus-square"></i>
        </Link>
      </div>
      <div className="listContainer">
        <TaskList tasks={tasks.filter(task => task.status === 'to do')} title="do wykonania" />
        <TaskList tasks={tasks.filter(task => task.status === 'in progress')} title="w trakcie wykonywania" />
        <TaskList tasks={tasks.filter(task => task.status === 'done')} title="wykonane" />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks.list
});
export default connect(mapStateToProps)(Tasks);
