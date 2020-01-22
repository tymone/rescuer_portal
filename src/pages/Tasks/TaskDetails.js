import React from 'react';
import { connect } from 'react-redux';

import date from './../../helpers/setDate';

const TaskDetails = ({ match, tasks }) => {
  const matchId = match.params.id;
  const [taskDetails] = tasks.filter(task => task.id === Number(matchId));
  const { title, content, status, addDate, finishDate } = taskDetails;

  const setStatus = status => {
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

  return (
    <div className="taskDetails">
      <h1>{title}</h1>
      <div className="details">
        <div className="options">
          <i class="fas fa-edit"></i>
          <i class="fas fa-trash-alt"></i>
        </div>
        <p>{content}</p>
        <p>status: {setStatus(status)}</p>
        <p>data dodania: {date(addDate)}</p>
        <p>data zakończenia: {finishDate ? date(finishDate) : '-'}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks.list
});

export default connect(mapStateToProps)(TaskDetails);
