import React, { Component } from 'react';

class UserInfo extends Component {
  state = {  }
  render() { 
    const id = this.props.match.params.id
    return ( 
      <p>user info {id}</p>
     );
  }
}
 
export default UserInfo;