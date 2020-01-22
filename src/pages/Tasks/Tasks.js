import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskToDo from './TaskToDo';
import TaskInProgress from './TaskInProgress';
import TaskDone from './TaskDone';

class Tasks extends Component {
  state = {
    tasks: []
  };

  componentWillMount() {
    const { tasks } = this.props;
    this.setState({
      tasks
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="TasksMain">
        <h1>Lista zadań</h1>
        <TaskToDo tasks={tasks.filter(task => task.status === 'to do')} />
        <TaskInProgress tasks={tasks.filter(task => task.status === 'in progress')} />
        <TaskDone tasks={tasks.filter(task => task.status === 'done')} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.list
});
export default connect(mapStateToProps)(Tasks);
