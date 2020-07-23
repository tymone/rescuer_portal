import React from 'react';
import PropTypes from 'prop-types';

import date from 'helpers/setDate';

const TaskDetails = ({ details }) => {
  const { status, addDate, createdBy, workingBy, updatedBy, finishDate, finishedBy } = details;
  const setStatus = (status) => {
    switch (status) {
      case 'to do':
        return 'do wykonania';
      case 'in progress':
        return 'w trakcie wykonywania/nie ukończone';
      case 'done':
        return 'wykonane';
      default:
    }
  };
  return (
    <>
      <span>{setStatus(status)}</span>
      <span>{date(addDate)}</span>
      <span>{createdBy}</span>
      <span>{workingBy || '-'}</span>
      <span>{updatedBy || '-'}</span>
      <span>{finishDate ? date(finishDate) : '-'}</span>
      <span>{finishedBy || '-'}</span>
    </>
  );
};

TaskDetails.propTypes = {
  details: PropTypes.object,
};

export default TaskDetails;
