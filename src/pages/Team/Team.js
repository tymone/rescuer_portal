import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './duck/actions';
import { Link } from 'react-router-dom';

import User from './User';

class Table extends Component {
  state = {
    team: []
  };

  componentWillMount() {
    const team = this.props.team;
    this.setState({
      team
    });
  }

  deleteRescuer = id => {
    const { team } = this.state;
    const { remove } = this.props;
    const newTeam = team.filter(rescuer => rescuer.id !== id);
    this.setState({
      team: newTeam
    });
    remove(id);
  };

  team = team => team.map(rescuer => <User deleteRescuer={this.deleteRescuer} key={rescuer.id} rescuer={rescuer} />);

  render() {
    const { team } = this.state;
    return (
      <div className="team">
        <h1>Drużyna KSRG</h1>
        <div className="options">
          <Link to={'/druzyna/dodaj'}>
            <i className="fas fa-user-plus"></i>
          </Link>
        </div>
        <div className="table">
          <div className="head">
            <span>Imię</span>
            <span>Nazwisko</span>
            <span>Oddział</span>
            <span>Stanowisko</span>
            <span>Funkcja KSRG</span>
            <span>Szczegóły</span>
          </div>
          <div className="body">{this.team(team)}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  team: state.team.list
});

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(actions.remove(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

// delete = i => {
//   const team = [...this.state.team];
//   const index = team.findIndex(user => user.id === i);
//   team.splice(index, 1);
//   this.setState({
//     team
//   });
// };

// handleSort = i => {
//   let sortMove = this.state.sortMove;
//   let team = [...this.state.team];
//   switch (i) {
//     case 3:
//       team.sort(
//         (a, b) => (sortMove ? a : b).doctor - (sortMove ? b : a).doctor
//       );
//       break;
//     case 4:
//       team.sort(
//         (a, b) => (sortMove ? a : b).train - (sortMove ? b : a).train
//       );
//       break;
//     case 5:
//       team.sort((a, b) => (sortMove ? a : b).kpp - (sortMove ? b : a).kpp);
//       break;
//     case 6:
//       team.sort(
//         (a, b) => (sortMove ? a : b).ground1 - (sortMove ? b : a).ground1
//       );
//       break;
//     case 7:
//       team.sort(
//         (a, b) => (sortMove ? a : b).ground2 - (sortMove ? b : a).ground2
//       );
//       break;
//     case 8:
//       team.sort(
//         (a, b) => (sortMove ? a : b).osrg1 - (sortMove ? b : a).osrg1
//       );
//       break;
//     case 9:
//       team.sort(
//         (a, b) => (sortMove ? a : b).osrg2 - (sortMove ? b : a).osrg2
//       );
//       break;
//     case 10:
//       team.sort(
//         (a, b) => (sortMove ? a : b).under1 - (sortMove ? b : a).under1
//       );
//       break;
//     case 11:
//       team.sort(
//         (a, b) => (sortMove ? a : b).under2 - (sortMove ? b : a).under2
//       );
//       break;
//     default:
//       console.log('');
//   }
//   this.setState({
//     sortMove: !sortMove,
//     team
//   });
// };
