import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import actions from '../duck/actions';
import Details from './Details';

class AddTask extends Component {
  state = {
    title: '',
    content: '',
    status: 'to do',
    addDate: '',
    finishDate: '',
    createdBy: '',
    workingBy: '',
    finishedBy: '',
    updatedBy: '',
    redirect: false
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTask = (e) => {
    e.preventDefault();

    const { title, content, status, addDate, finishDate, createdBy, workingBy, finishedBy, redirect } = this.state;
    const { counter, add } = this.props;
    const id = counter + 1;
    const newTask = {
      id,
      title,
      content,
      status,
      addDate,
      finishDate,
      createdBy,
      workingBy,
      finishedBy
    };
    add(newTask);
    this.setState({
      title: '',
      content: '',
      status: '',
      addDate: '',
      finishDate: '',
      createdBy: '',
      workingBy: '',
      finishedBy: '',
      redirect: !redirect
    });
  };

  render() {
    const { title, content, status, addDate, finishDate, createdBy, workingBy, redirect } = this.state;
    const details = { title, content, status, addDate, finishDate, createdBy, workingBy };
    const { history } = this.props;
    if (redirect) {
      return <Redirect to="/zadania" />;
    }
    return (
      <div className="addTask">
        <h1>Utwórz zadanie</h1>
        <Details details={details} handleChange={this.handleChange} />
        <div className="options">
          <i className="fas fa-chevron-left" onClick={history.goBack}></i>
          <i className="fas fa-check" onClick={this.addTask}></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks.list,
  counter: tasks.counter
});

const mapDispatchToProps = (dispatch) => ({
  add: (newTask) => dispatch(actions.add(newTask))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
