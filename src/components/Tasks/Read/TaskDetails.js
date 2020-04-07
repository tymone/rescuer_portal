import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import { Link } from 'react-router-dom';

import date from './../../../helpers/setDate';

const TaskDetails = ({ tasks, match, remove, history }) => {
  const { id } = match.params;
  const taskDetails = tasks.find((task) => task.id === Number(id));
  const { title, content, status, addDate, finishDate, createdBy, workingBy } = taskDetails;

  const setStatus = (status) => {
    switch (status) {
      case 'to do':
        return 'do wykonania';
      case 'in progress':
        return 'w trakcie wykonywania/nie ukończone';
      case 'done':
        return 'wykonane';
      default:
        return;
    }
  };

  const removeTask = (id) => {
    remove(id);
    history.push('/zadania');
  };

  return (
    <div className="taskDetails">
      <h1>{title}</h1>
      <div className="details">
        <p>{content}</p>
        <div className="info">
          <span>status: {setStatus(status)}</span>
          <span>data dodania: {date(addDate)}</span>
          <span>dodał: {createdBy}</span>
          <span>rozpoczęte przez: {workingBy ? workingBy : '-'}</span>
          <span>data zakończenia: {finishDate ? `${date(finishDate)}` : '-'}</span>
        </div>
      </div>
      <div className="options">
        <i className="fas fa-chevron-left" onClick={history.goBack}></i>
        <Link to={`/zadania/edytuj/${id}`}>
          <i className="fas fa-edit"></i>
        </Link>
        <i className="fas fa-trash-alt" onClick={() => removeTask(id)}></i>
      </div>
    </div>
  );
};

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks.list
});

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(actions.remove(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
