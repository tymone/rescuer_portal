import React, { Component } from "react";

import "../../styles/style.css";

export default class AddUser extends Component {
  state = {
    name: '',
    surname: '',
    doctor: '',
    trainGroup: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    checkedGroup: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, surname, doctor, checkedGroup } = this.state

    if (name && surname && doctor && checkedGroup) {
      const newRescuer = {
        id: 108842,
        name,
        surname,
        doctor: new Date(doctor).getTime(),
        train: checkedGroup,
      }
      this.props.addRescuer(newRescuer)
    }
    else {
      alert('nie wszystkie pola zostały wypełnione prawidłowo')
    }
  }

  render() {
    let trainGroup = this.state.trainGroup.map((index, i) => (<option value={`grupa ${i + 1}`} key={`grupa ${i + 1}`}>{`Grupa ${(i + 1)}`}</option>))

    return (
      <div className="addUser">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>
            <p> Imię:</p>
            <input type="text" placeholder='wpisz imię...' id='name' name={'name'} value={this.state.name} onChange={this.handleChange} />
          </label>
          <label htmlFor='surname'><p>Nazwisko:</p>
            <input type="text" placeholder='wpisz nazwisko...' id='surname' name={'surname'} value={this.state.surname} onChange={this.handleChange} />
          </label>
          <label htmlFor='doctor'><p>Badania:</p>
            <input type="date" id='doctor' name={'doctor'} value={this.state.doctor} onChange={this.handleChange} />
          </label>
          <label htmlFor='train'><p>Wybierz grupę ćwiczeń:</p>
            <select value={this.state.checkedGroup} name={'checkedGroup'} onChange={this.handleChange}>
              {trainGroup}
            </select>
          </label>
          <button>Zapisz</button>
        </form>
      </div>
    );
  }
};
