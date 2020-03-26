import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import actions from '../duck/actions';
import AddDetails from './AddDetails';

class AddUser extends Component {
  state = {
    name: '',
    surname: '',
    branch: '',
    minePosition: '',
    KSRGPosition: '',
    doctor: '',
    trainingGroup: '',
    duty: '',
    inaccessibleFrom: '',
    inaccessibleTo: '',
    redirect: false
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  createNewRescuer = () => {
    const { name, surname, branch, minePosition, KSRGPosition, doctor, duty, trainingGroup, inaccessibleFrom, inaccessibleTo } = this.state;
    let { id } = this.props;
    const newRescuer = {
      id: ++id,
      name,
      surname,
      branch,
      minePosition,
      KSRGPosition,
      doctor,
      trainingGroup,
      included: { osrg1: false, under1: false, ground1: false, osrg2: false, under2: false, ground: false },
      duty,
      inaccessible: { fron: inaccessibleFrom, to: inaccessibleTo },
      suspend: false
    };
    return newRescuer;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newRescuer = this.createNewRescuer();
    const { redirect } = this.state;
    const { add } = this.props;

    add(newRescuer);
    this.setState({
      redirect: !redirect
    });
  };

  render() {
    const { redirect } = this.state;
    const { history } = this.props;
    if (redirect) {
      return <Redirect to="/druzyna" />;
    }
    return (
      <div className="rescuerDetails">
        <h1>Dodaj ratownika</h1>
        <AddDetails handleChange={this.handleChange} rescuer={this.state} />
        <div className="options">
          <i className="fas fa-chevron-left" onClick={history.goBack}></i>
          <i className="fas fa-user-check" onClick={this.handleSubmit}></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.team.id
});

const mapDispatchToProps = (dispatch) => ({
  add: (newRescuer) => dispatch(actions.add(newRescuer))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
