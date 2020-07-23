import React from 'react';
import PropTypes from 'prop-types';

const TaskCreate = ({ details, handleChange }) => {
  const { addDate, createdBy } = details;
  return (
    <>
      <input type="date" value={addDate} name="addDate" onChange={handleChange} />
      <input type="text" value={createdBy} name="createdBy" onChange={handleChange} />
    </>
  );
};

TaskCreate.propTypes = {
  details: PropTypes.object,
  handleChange: PropTypes.func,
};
export default TaskCreate;
