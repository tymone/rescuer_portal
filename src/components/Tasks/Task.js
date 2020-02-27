import React from 'react';
import { Link } from 'react-router-dom';

const Task = ({ task }) => {
  return (
    <li>
      <span>{task.title}</span>
      <p>{task.content}</p>
      <div className="options">
        <Link to={`/zadania/${task.id}`}>
          <i className="fas fa-info"></i>
        </Link>
      </div>
    </li>
  );
};

export default Task;
