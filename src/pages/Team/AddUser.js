import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import actions from './duck/actions';

class AddUser extends Component {
  state = {
    name: '',
    surname: '',
    branch: '',
    minePosition: '',
    KSRGPosition: '',
    doctor: '',
    checkedGroup: '',
    duty: '',
    redirect: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, surname, branch, minePosition, KSRGPosition, doctor, checkedGroup, duty } = this.state;
    let { add, id } = this.props;
    const newRescuer = {
      id: ++id,
      name,
      surname,
      branch,
      minePosition,
      KSRGPosition,
      doctor: new Date(doctor).getTime(),
      train: checkedGroup,
      duty,
      inaccessible: '',
      suspend: false
    };
    add(newRescuer);
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  setLabel = (stateName, name, type, value, placeholder = '') => {
    return (
      <label htmlFor={stateName}>
        <p>{name}:</p>
        <input type={type} placeholder={placeholder} name={stateName} value={value} onChange={this.handleChange} required />
      </label>
    );
  };

  render() {
    console.log(this.state.duty);
    const { name, surname, branch, minePosition, KSRGPosition, doctor, checkedGroup, duty } = this.state;
    const { group } = this.props;
    const getArrayTrainGroups = Object.keys(group);
    const getTrainGroup = getArrayTrainGroups.map((group, i) => (
      <option value={`grupa ${i + 1}`} key={group}>
        {`Grupa ${i + 1}`}
      </option>
    ));

    return (
      <div className="addUser">
        <h1>Dodaj ratownika do drużyny</h1>
        {this.renderRedirect()}
        <form onSubmit={this.handleSubmit}>
          {this.setLabel('name', 'Imię', 'text', name, 'wpisz imię...')}
          {this.setLabel('surname', 'Nazwisko', 'text', surname, 'wpisz nazwisko...')}
          {this.setLabel('branch', 'Oddział', 'text', branch, 'wpisz oddział...')}
          {this.setLabel('minePosition', 'Stanowisko', 'text', minePosition, 'wpisz stanowisko...')}
          {this.setLabel('KSRGPosition', 'Funkcja KSRG', 'text', KSRGPosition, 'wpisz funkcję...')}
          {this.setLabel('doctor', 'Badania', 'date', doctor)}
          {this.setLabel('duty', 'Dyżur', 'month', duty)}
          <label htmlFor="train">
            <p>Wybierz grupę ćwiczeń:</p>
            <select value={checkedGroup} name="checkedGroup" onChange={this.handleChange}>
              {getTrainGroup}
            </select>
          </label>
          <button>Zapisz</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: rescuer => dispatch(actions.add(rescuer))
});

const mapStateToProps = state => ({
  id: state.team.id,
  group: state.group.list
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
