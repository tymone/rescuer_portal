import React from 'react';
import PropTypes from 'prop-types';

const TaskUpdate = ({ details, handleChange }) => {
  const { status, addDate, createdBy, workingBy, updatedBy, finishDate, finishedBy } = details;
  return (
    <>
      <select value={status} name="status" onChange={handleChange}>
        <option value="to do">do wykonania</option>
        <option value="in progress">w trakcie wykonywania</option>
        <option value="done">wykonane</option>
      </select>
      <input
        type="text"
        onFocus={(e) => (e.target.type = 'date')}
        value={addDate}
        name="addDate"
        onChange={handleChange}
      />
      <input type="text" value={createdBy} name="createdBy" onChange={handleChange} />
      <input type="text" value={workingBy} name="workingBy" onChange={handleChange} />
      <input type="text" value={updatedBy} name="updatedBy" onChange={handleChange} />

      <input
        type="text"
        onFocus={(e) => (e.target.type = 'date')}
        value={finishDate}
        name="finishDate"
        onChange={handleChange}
      />
      <input type="text" value={finishedBy} name="finishedBy" onChange={handleChange} />
    </>
  );
};

TaskUpdate.propTypes = {
  details: PropTypes.object,
  handleChange: PropTypes.func,
};
export default TaskUpdate;
