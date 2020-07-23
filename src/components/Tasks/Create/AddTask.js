import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Task } from 'components/Tasks/Template';

import actions from '../duck/actions';

class AddTask extends Component {
  state = {
    title: '',
    content: '',
    addDate: '',
    createdBy: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addTask = () => {
    const { title, content, addDate, createdBy } = this.state;
    const { counter, add, history } = this.props;
    const id = counter + 1;
    const newTask = {
      id,
      title,
      content,
      status: 'to do',
      addDate,
      finishDate: '',
      createdBy,
      workingBy: '',
      updatedBy: '',
      finishedBy: '',
    };
    add(newTask);
    history.push('/zadania');
  };

  render() {
    const { title, content, addDate, createdBy } = this.state;
    const details = { title, content, addDate, createdBy };
    const { history } = this.props;

    return (
      <>
        <h1>Utwórz zadanie</h1>
        <Task type="create" details={details} handleChange={this.handleChange} />
        <div className="options">
          <i className="fas fa-chevron-left" onClick={history.goBack} />
          <i className="fas fa-check" onClick={this.addTask} />
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks.list,
  counter: tasks.counter,
});

const mapDispatchToProps = (dispatch) => ({
  add: (newTask) => dispatch(actions.add(newTask)),
});

AddTask.propTypes = {
  counter: PropTypes.number,
  add: PropTypes.func,
  history: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
