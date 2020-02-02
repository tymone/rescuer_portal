import React from 'react';

import date from '../../helpers/setDate';

const Group = ({ value, index }) => {
  const getGroup = value => {
    return value.map(getDate => (
      <div key={getDate} className="item">
        {date(getDate)}
      </div>
    ));
  };

  return (
    <li>
      <div className="item">{index + 1}</div>
      {getGroup(value)}
      <i class="fas fa-info item"></i>
    </li>
  );
};

export default Group;
