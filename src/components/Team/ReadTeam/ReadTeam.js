import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyledTable, StyledHead } from './StyledReadTeam';

import ListItemRescuer from './ListItemRescuer';

class ReadTeam extends Component {
  state = {
    team: [],
  };

  componentDidMount() {
    const { team } = this.props;
    this.setState({
      team,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.team !== prevProps.team) {
      this.setState({
        team: this.props.team,
      });
    }
  }

  render() {
    const { team } = this.state;

    return (
      <StyledTable>
        <StyledHead>
          <li>Imię</li>
          <li>Nazwisko</li>
          <li>Oddział</li>
          <li>Stanowisko</li>
          <li>Funkcja KSRG</li>
          <li>Szczegóły</li>
        </StyledHead>
        <ul>
          {team.map((rescuer) => (
            <ListItemRescuer key={rescuer.id} rescuer={rescuer} />
          ))}
        </ul>
      </StyledTable>
    );
  }
}

const mapStateToProps = ({ team }) => ({ team: team.list });
export default connect(mapStateToProps)(ReadTeam);
