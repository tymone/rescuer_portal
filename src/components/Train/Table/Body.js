import React from 'react';

const Body = ({ list }) => {
  const setListItems = (list) => {
    return list.map((item, i) => <li key={i}>{item}</li>);
  };

  return (
    <div className="body">
      <ul>{setListItems(list)}</ul>
    </div>
  );
};

export default Body;
