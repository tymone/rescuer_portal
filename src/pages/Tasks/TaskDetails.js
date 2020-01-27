import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './duck/actions';
import { Redirect, Link } from 'react-router-dom';

import date from './../../helpers/setDate';

class TaskDetails extends Component {
  state = {
    id: '',
    title: '',
    content: '',
    status: '',
    addDate: '',
    finishDate: '',
    createdBy: '',
    workingBy: '',
    finishedBy: '',
    redirect: false
  };

  componentWillMount() {
    const { match, tasks } = this.props;
    const id = match.params.id;
    const taskDetails = tasks.find(task => task.id === Number(id));
    const { title, content, status, addDate, finishDate, createdBy, workingBy, finishedBy } = taskDetails;
    this.setState({
      id,
      title,
      content,
      status,
      addDate,
      finishDate,
      createdBy,
      workingBy,
      finishedBy
    });
  }

  setStatus = status => {
    switch (status) {
      case 'to do':
        return 'do zrobienia';
      case 'in progress':
        return 'w trakcie wykonywania/nie ukończone';
      case 'done':
        return 'wykonane';
      default:
        return;
    }
  };

  removeTask = id => {
    const { redirect } = this.state;
    const { remove } = this.props;
    remove(id);
    this.setState({
      redirect: !redirect
    });
  };

  render() {
    const { id, title, content, status, addDate, finishDate, createdBy, workingBy, finishedBy, redirect } = this.state;
    const { history } = this.props;
    if (redirect) {
      return <Redirect to="/zadania" />;
    }
    return (
      <div className="taskDetails">
        <h1>{title}</h1>
        <div className="details">
          <p>{content}</p>
          <div className="info">
            <span>status: {this.setStatus(status)}</span>
            <span>data dodania: {date(addDate)}</span>
            <span>dodał: {createdBy}</span>
            <span>rozpoczęte przez: {workingBy ? workingBy : '-'}</span>
            <span>data zakończenia: {finishDate ? `${date(finishDate)}` : '-'}</span>
            <span>zakończone przez: {finishedBy} </span>
          </div>
          <div className="options">
            <i className="fas fa-chevron-left" onClick={() => history.goBack()}></i>
            <Link to={`/zadania/edytuj/${id}`}>
              <i className="fas fa-edit"></i>
            </Link>
            <i className="fas fa-trash-alt" onClick={() => this.removeTask(id)}></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.list
});

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(actions.remove(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
