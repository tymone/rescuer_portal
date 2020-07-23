import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledListItem, StyledSpan, StyledParagraph, StyledOptions } from './StyledReadTasks';

const Task = ({ task }) => (
  <StyledListItem>
    <StyledSpan>{task.title}</StyledSpan>
    <StyledParagraph>{task.content}</StyledParagraph>
    <StyledOptions>
      <Link to={`/zadania/${task.id}`}>
        <i className="fas fa-info" />
      </Link>
    </StyledOptions>
  </StyledListItem>
);

Task.propTypes = {
  task: PropTypes.object,
};
export default Task;
