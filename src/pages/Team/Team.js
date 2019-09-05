import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from './Table';

class Team extends Component {
  counter = 12;
  state = {
    sortMove: true,
    team: this.props.team.list,
    trainGroup: []
  };

  delete = i => {
    const team = [...this.state.team];
    const index = team.findIndex(user => user.id === i);
    team.splice(index, 1);
    this.setState({
      team
    });
  };

  handleSort = i => {
    let sortMove = this.state.sortMove;
    let team = [...this.state.team];
    switch (i) {
      case 3:
        team.sort(
          (a, b) => (sortMove ? a : b).doctor - (sortMove ? b : a).doctor
        );
        break;
      case 4:
        team.sort(
          (a, b) => (sortMove ? a : b).train - (sortMove ? b : a).train
        );
        break;
      case 5:
        team.sort((a, b) => (sortMove ? a : b).kpp - (sortMove ? b : a).kpp);
        break;
      case 6:
        team.sort(
          (a, b) => (sortMove ? a : b).ground1 - (sortMove ? b : a).ground1
        );
        break;
      case 7:
        team.sort(
          (a, b) => (sortMove ? a : b).ground2 - (sortMove ? b : a).ground2
        );
        break;
      case 8:
        team.sort(
          (a, b) => (sortMove ? a : b).osrg1 - (sortMove ? b : a).osrg1
        );
        break;
      case 9:
        team.sort(
          (a, b) => (sortMove ? a : b).osrg2 - (sortMove ? b : a).osrg2
        );
        break;
      case 10:
        team.sort(
          (a, b) => (sortMove ? a : b).under1 - (sortMove ? b : a).under1
        );
        break;
      case 11:
        team.sort(
          (a, b) => (sortMove ? a : b).under2 - (sortMove ? b : a).under2
        );
        break;
      default:
        console.log('');
    }
    this.setState({
      sortMove: !sortMove,
      team
    });
  };

  render() {
    return (
      <div className='team'>
        <Table team={this.state.team} />
        <button>
          <Link to='/druzyna/dodaj'>Dodaj ratownika</Link>
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  team: state.team
});

export default connect(
  mapStateToProps,
  {}
)(Team);
