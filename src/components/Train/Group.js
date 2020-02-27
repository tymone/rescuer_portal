import React from 'react';
import { Link } from 'react-router-dom';

import date from '../../helpers/setDate';

const Group = ({ details, group }) => {
  const getGroups = details.map((item, i) => <li key={i}>{date(item)}</li>);

  return (
    <ul>
      <li>{group + 1}</li>
      {getGroups}
      <li>
        <Link to={`/cwiczenia/${group}`}>
          <i className="fas fa-info"></i>
        </Link>
        <Link to={`/cwiczenia/edytuj/${group}`}>
          <i className="fas fa-edit" title="edytuj"></i>
        </Link>
      </li>
    </ul>
  );
};

export default Group;
