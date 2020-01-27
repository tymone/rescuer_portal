import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskList from './TaskList';

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
      <div className="Tasks">
        <h1>Lista zadań</h1>
        <div className="listContainer">
          <TaskList tasks={tasks.filter(task => task.status === 'to do')} title="do wykonania" />
          <TaskList tasks={tasks.filter(task => task.status === 'in progress')} title="w trakcie wykonywania" />
          <TaskList tasks={tasks.filter(task => task.status === 'done')} title="wykonane" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.list
});
export default connect(mapStateToProps)(Tasks);
