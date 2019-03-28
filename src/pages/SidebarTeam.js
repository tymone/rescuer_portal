import React, { Component } from 'react';

export default class SidebarTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [{ name: 'Jan', surname: 'Kowalski', tel: '1234' }]
    }
  }


  render() {
    const team = this.state.team
    const teamMap = team.map((user, i) => (<p key={i}>{user.name} {user.surname} {`tel: ${user.tel}`}</p>))

    return (
      <div>
        {teamMap}
      </div>
    )
  }
}