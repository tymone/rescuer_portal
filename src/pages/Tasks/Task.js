import React from 'react';
import { Link } from 'react-router-dom';

const Task = ({ task }) => {
  return (
    <li>
      <span>
        {task.title}
        <Link to={`/zadania/${task.id}`}>
          <i className="fas fa-info"></i>
        </Link>
      </span>
    </li>
  );
};

export default Task;
