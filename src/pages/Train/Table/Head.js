import React from 'react';

const Head = ({ title }) => {
  const headValue = (title) => {
    return title.map((title) => <span key={title}>{title}</span>);
  };

  return <div className="head">{headValue(title)}</div>;
};

export default Head;
