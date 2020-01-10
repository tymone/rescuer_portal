import React from "react";

const Multitude = ({ multitude, time }) => {
  const getUsers = multitude.map(user => <p key={user}>{user}</p>);

  return (
    <div className="multitude">
      <p>{time}</p>
      {getUsers}
    </div>
  );
};

export default Multitude;
