import React from 'react';

import date from '../../../helpers/setDate';

const DateRow = (props) => {
  const row = props.details.map((item) => <li key={item}>{date(item)}</li>);

  return (
    <div className="dateRow">
      <ul>
        {props.fromDetails ? (
          <>
            <li>---</li>
            <li>---</li>
            <li>---</li>
            {row}
          </>
        ) : null}
        {props.fromEdit ? (
          <>
            <li>---</li>
            <li>---</li>
            {row}
            <li></li>
          </>
        ) : null}
      </ul>
    </div>
  );
};

export default DateRow;
