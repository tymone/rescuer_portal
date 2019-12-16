import React, { Component } from "react";

class Multitude extends Component {
  users = getUsers =>
    getUsers.map(user => <input key={user} type="text" placeholder={user} />);

  render() {
    const { multitude, className } = this.props;

    return <div className={className}>{this.users(multitude)}</div>;
  }
}

export default Multitude;
