import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ rescuer, deleteRescuer }) => {
  const { name, surname, branch, minePosition, KSRGPosition } = rescuer;

  return (
    <div className="user">
      <span>{name}</span>
      <span>{surname}</span>
      <span>{branch}</span>
      <span>{minePosition}</span>
      <span>{KSRGPosition}</span>
      <span>
        <Link to={`/druzyna/${rescuer.id}`}>
          <i className="fas fa-info"></i>
        </Link>
        <Link to={`/druzyna/edytuj/${rescuer.id}`}>
          <i className="fas fa-user-edit"></i>
        </Link>
        <i className="fas fa-user-times" onClick={() => deleteRescuer(rescuer.id)}></i>
      </span>
    </div>
  );
};

export default User;
