import React, { Component } from 'react';

export default class SidebarTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: []
    }
  }


  render() {

    return (
      <div>
        <p>Jan Kowalski tel: 1234</p>
        <p>Jan Kowalski tel: 1234</p>
        <p>Jan Kowalski tel: 1234</p>

      </div>
    )
  }
}