import React from 'react';
import { Link } from 'react-router-dom';

const ListItemRescuer = ({ rescuer }) => {
  const { id, name, surname, branch, minePosition, KSRGPosition } = rescuer;
  return (
    <li className="user">
      <span>{name}</span>
      <span>{surname}</span>
      <span>{branch}</span>
      <span>{minePosition}</span>
      <span>{KSRGPosition}</span>
      <span>
        <Link to={`/druzyna/${id}`}>
          <i className="fas fa-bars"></i>
        </Link>
      </span>
    </li>
  );
};

export default ListItemRescuer;
