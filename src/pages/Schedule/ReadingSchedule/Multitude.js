import React from "react";

const Multitude = ({ multitude, index }) => {
  const getUsers = multitude.map(user => <p key={user}>{user}</p>);

  return <div className={`multitude${index}`}>{getUsers}</div>;
};

export default Multitude;
