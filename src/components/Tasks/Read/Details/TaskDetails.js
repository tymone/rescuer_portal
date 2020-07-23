import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Task } from 'components/Tasks/Template';

const TaskDetails = ({ tasks, match, history }) => {
  const { id } = match.params;
  const taskDetails = tasks.find((task) => task.id === Number(id));

  return (
    <>
      <h1>{taskDetails.title}</h1>
      <Task details={taskDetails} type="details" />
      <div className="options">
        <i className="fas fa-chevron-left" onClick={history.goBack} />
        <Link to={`/zadania/edytuj/${id}`}>
          <i className="fas fa-edit" />
        </Link>
      </div>
    </>
  );
};

const mapStateToProps = ({ tasks }) => ({ tasks: tasks.list });

TaskDetails.propTypes = {
  tasks: PropTypes.array,
  match: PropTypes.object,
  history: PropTypes.object,
};

export default connect(mapStateToProps)(TaskDetails);
