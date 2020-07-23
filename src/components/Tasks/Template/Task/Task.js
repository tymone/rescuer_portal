import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTaskDetails,
  StyledContent,
  StyledInfoContainer,
  StyledInfoColumn,
  StyledTitle,
  StyledValue,
  StyledInputTitle,
} from './StyledTask';

import TaskDetails from './TaskDetails';
import TaskCreate from './TaskCreate';
import TaskUpdate from './TaskUpdate';

const Task = ({ type, details, handleChange }) => {
  const { title, content } = details;

  const getDetailsValue = () => {
    if (type === 'details') {
      return <TaskDetails details={details} />;
    }
    if (type === 'create') {
      return <TaskCreate details={details} handleChange={handleChange} />;
    }
    if (type === 'update') {
      return <TaskUpdate details={details} handleChange={handleChange} />;
    }
    return <p>Brak zadania lub wystąpił błąd.</p>;
  };

  return (
    <StyledTaskDetails>
      {type !== 'details' ? (
        <StyledInputTitle>
          <span>Tytuł zadania:</span>
          <input type="text" value={title} name="title" onChange={handleChange} />
        </StyledInputTitle>
      ) : null}
      <StyledContent>
        {type === 'details' ? (
          content
        ) : (
          <label>
            Treść zadania:
            <textarea value={content} name="content" onChange={handleChange} />
          </label>
        )}
      </StyledContent>
      <StyledInfoContainer>
        <StyledInfoColumn>
          <StyledTitle>
            {type === 'create' ? null : <span>Status :</span>}
            <span>Data dodania :</span>
            <span>Dodał :</span>
            {type === 'create' ? null : <span>Rozpoczęte przez :</span>}
            {type === 'create' ? null : <span>Edytowane przez :</span>}
            {type === 'create' ? null : <span>Data zakończenia :</span>}
            {type === 'create' ? null : <span>Zakończone przez :</span>}
          </StyledTitle>
        </StyledInfoColumn>
        <StyledInfoColumn>
          <StyledValue>{getDetailsValue()}</StyledValue>
        </StyledInfoColumn>
      </StyledInfoContainer>
    </StyledTaskDetails>
  );
};

Task.propTypes = {
  type: PropTypes.string,
  details: PropTypes.object,
  handleChange: PropTypes.func,
};
export default Task;
