import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ReadTasks } from './Read';

const Tasks = ({ tasksList }) => {
  const getTasksList = () => {
    if (tasksList.length !== 0) {
      return <ReadTasks tasksList={tasksList} />;
    }
    return <p>Brak listy zadań lub wystąpił błąd.</p>;
  };
  return (
    <>
      <h1>Lista zadań</h1>
      {getTasksList()}
    </>
  );
};

const mapStateToProps = ({ tasks }) => ({
  tasksList: tasks.list,
});

Tasks.propTypes = {
  tasksList: PropTypes.array,
};
export default connect(mapStateToProps)(Tasks);
