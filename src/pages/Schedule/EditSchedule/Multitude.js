import React, { Component } from 'react';

class Multitude extends Component {

  users = (getUsers) =>(
    getUsers.map((user, i) => (
      <input key={user} type='text' placeholder={user} />
    ))
  )

  render(){
    const getUsers = this.props.multitude

    return(
      <div className={this.props.className}>
        {this.users(getUsers)}
      </div>
    )
  }
}

export default Multitude;