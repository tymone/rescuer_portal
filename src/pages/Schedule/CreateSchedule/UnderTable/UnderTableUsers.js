import React from "react";

const UnderTableUsers = ({ users, name }) => {
  const showUsers = (users, name) => {
    const usersList = users[name];
    if (usersList.length) {
      return usersList.map(user => <li key={user}>{user}</li>);
    } else {
      return "---";
    }
  };
  return (
    <div>
      <ul>{showUsers(users, name)}</ul>
    </div>
  );
};

export default UnderTableUsers;
