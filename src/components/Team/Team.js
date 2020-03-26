import React from 'react';
import { Link } from 'react-router-dom';

import Table from './Read/Table';

const Team = () => {
  return (
    <div className="team">
      <h1>Drużyna KSRG</h1>
      <div className="options">
        <Link to={'/druzyna/dodaj'}>
          <i className="fas fa-user-plus"></i>
        </Link>
      </div>
      <Table />
    </div>
  );
};

export default Team;
