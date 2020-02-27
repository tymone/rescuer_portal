import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import date from '../../helpers/setDate';

class UserInfo extends Component {
  state = {
    id: '',
    name: '',
    surname: '',
    branch: '',
    minePosition: '',
    KSRGPosition: '',
    doctor: '',
    train: '',
    duty: '',
    inaccessible: ''
  };

  componentWillMount() {
    const id = this.props.match.params.id;
    const rescuer = this.props.team.find(rescuer => rescuer.id === Number(id));
    const { name, surname, branch, minePosition, KSRGPosition, doctor, train, duty, inaccessible } = rescuer;
    this.setState({
      id,
      name,
      surname,
      branch,
      minePosition,
      KSRGPosition,
      doctor,
      train,
      duty,
      inaccessible
    });
  }

  render() {
    const { id, name, surname, branch, minePosition, KSRGPosition, doctor, train, duty, inaccessible } = this.state;
    const { history } = this.props;
    return (
      <div className="userInfo">
        <h1>
          {name} {surname}
        </h1>
        <div className="details">
          <span>oddział: {branch} </span>
          <span>stanowisko: {minePosition}</span>
          <span>funkcja KSRG: {KSRGPosition}</span>
          <span>termin ważności badań: {date(doctor)}</span>
          <span>grupa ćwiczeń: {train}</span>
          <span>dyżur KSRG: {duty ? duty : '-'}</span>
          <span>niedostępny: {inaccessible ? inaccessible : '-'}</span>
          <span></span>
        </div>
        <div className="options">
          <i className="fas fa-chevron-left" onClick={() => history.goBack()}></i>
          <Link to={`/druzyna/edytuj/${id}`}>
            <i className="fas fa-user-edit"></i>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  team: state.team.list
});

export default connect(mapStateToProps)(UserInfo);
