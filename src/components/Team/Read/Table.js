import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItemRescuer from './ListItemRescuer';

class Table extends Component {
  state = {
    team: []
  };

  componentDidMount() {
    const { team } = this.props;
    this.setState({
      team
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.team !== prevProps.team) {
      this.setState({
        team: this.props.team
      });
    }
  }

  render() {
    const { team } = this.state;

    return (
      <div className="table">
        <ul className="head">
          <li>Imię</li>
          <li>Nazwisko</li>
          <li>Oddział</li>
          <li>Stanowisko</li>
          <li>Funkcja KSRG</li>
          <li>Szczegóły</li>
        </ul>
        <ul className="body">
          {team.map((rescuer) => (
            <ListItemRescuer key={rescuer.id} rescuer={rescuer} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ team }) => ({ team: team.list });
export default connect(mapStateToProps)(Table);
