import React from 'react';

import date from '../../../helpers/setDate';

const AddedGroup = ({ details, number }) => {
  const dateRow = details.map((item, i) => <li key={i}>{date(item)}</li>);
  return (
    <ul>
      <li>{number}</li>
      {dateRow}
      <li></li>
    </ul>
  );
};

export default AddedGroup;
