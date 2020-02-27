import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './duck/actions';
import { Redirect } from 'react-router-dom';

import date from '../../helpers/setDate';

class EditUser extends Component {
  state = {
    redirect: false,
    id: '',
    name: '',
    surname: '',
    branch: '',
    minePosition: '',
    KSRGPosition: '',
    doctor: '',
    train: '',
    duty: '',
    inaccessible: '',
    suspend: ''
  };

  componentWillMount() {
    const id = this.props.match.params.id;
    const { rescuer } = this.props;
    const editRescuer = rescuer.find(rescuer => rescuer.id === Number(id));
    const { name, surname, branch, minePosition, KSRGPosition, doctor, train, duty, inaccessible, suspend } = editRescuer;
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
      inaccessible,
      suspend
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  label = (name, namePL, type, value) => {
    return (
      <label htmlFor={name}>
        {namePL}:
        <input type={type} name={name} value={value} onChange={this.handleChange} />
      </label>
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id, name, surname, branch, minePosition, KSRGPosition, doctor, train, duty, inaccessible, suspend } = this.state;
    const { update } = this.props;

    const updatedRescuer = {
      id: Number(id),
      name,
      surname,
      branch,
      minePosition,
      KSRGPosition,
      doctor,
      train,
      duty,
      inaccessible,
      suspend
    };
    update(updatedRescuer);
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/druzyna" />;
    }
  };

  render() {
    const { name, surname, branch, minePosition, KSRGPosition, doctor, train, duty, inaccessible } = this.state;
    const { group, history } = this.props;
    const getArrayTrainGroups = Object.keys(group);
    const getTrainGroup = getArrayTrainGroups.map((group, i) => (
      <option value={`grupa ${i + 1}`} key={group}>
        {`Grupa ${i + 1}`}
      </option>
    ));
    return (
      <div className="editUser">
        {this.renderRedirect()}
        <h1>{`${name} ${surname}`}</h1>
        <div className="userInfo">
          <form>
            <div className="details">
              {this.label('branch', 'oddział', 'text', branch)}
              {this.label('minePosition', 'stanowisko', 'text', minePosition)}
              {this.label('KSRGPosition', 'funkcja KSRG', 'text', KSRGPosition)}
              {this.label('doctor', 'termin ważności badan', 'date', date(doctor))}
              <label htmlFor="train">
                <p>Wybierz grupę ćwiczeń: (aktualnie - {train})</p>
                <select value={train} name="checkedGroup" onChange={this.handleChange}>
                  {getTrainGroup}
                </select>
              </label>
              {this.label('duty', 'dyżur KSRG', 'date', duty ? duty : '-')}
              {this.label('inaccessible', 'niedostępny', 'date', inaccessible ? inaccessible : '-')}
              <span></span>
            </div>
          </form>
        </div>
        <div className="options">
          <i className="fas fa-chevron-left" onClick={() => history.goBack()}></i>
          <i class="fas fa-user-check" onClick={this.handleSubmit}></i>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  rescuer: state.team.list,
  group: state.group.list
});

const mapDispatchToProps = dispatch => ({
  update: user => dispatch(actions.update(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
