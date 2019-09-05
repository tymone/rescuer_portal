import React from 'react';

import User from './User';

import '../../styles/style.css';

const Table = ({ team }) => {
  let users = team.map((user, i) => <User user={user} key={i} />);

  return (
    <div className='table'>
      <div className='head'>
        <span>Imię</span>
        <span>Nazwisko</span>
        <span>Badania</span>
        <span>Ćwiczenia</span>
      </div>
      <div className='users'>{users}</div>
    </div>
  );
};

export default Table;
