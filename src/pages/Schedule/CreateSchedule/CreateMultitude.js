import React, { Component } from 'react';

class CreateMultitude extends Component {
  state = {
    time: '',
    rescuer1: '',
    rescuer2: '',
    rescuer3: '',
    rescuer4: '',
    rescuer5: ''
  };

  handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => this.handleSubmit(this.state)
    );
  };

  handleSubmit = (multitude) => {
    const { day, multitudeName, getSchedule } = this.props;
    const { rescuer1, rescuer2, rescuer3, rescuer4, rescuer5, time } = multitude;
    const setMultitude = {
      day,
      multitudeName,
      time,
      multitude: [
        `${rescuer1 ? rescuer1 : '---'}`,
        `${rescuer2 ? rescuer2 : '---'}`,
        `${rescuer3 ? rescuer3 : '---'}`,
        `${rescuer4 ? rescuer4 : '---'}`,
        `${rescuer5 ? rescuer5 : '---'}`
      ]
    };
    getSchedule(setMultitude);
  };

  render() {
    const { rescuer1, rescuer2, rescuer3, rescuer4, rescuer5, time } = this.state;
    return (
      <ul className="multitude">
        <li>
          <input type="time" name="time" value={time} onChange={this.handleChange} />
        </li>
        <li>
          <input type="text" placeholder="nazwisko" name="rescuer1" value={rescuer1} onChange={this.handleChange} />
        </li>
        <li>
          <input type="text" placeholder="nazwisko" name="rescuer2" value={rescuer2} onChange={this.handleChange} />
        </li>
        <li>
          <input type="text" placeholder="nazwisko" name="rescuer3" value={rescuer3} onChange={this.handleChange} />
        </li>
        <li>
          <input type="text" placeholder="nazwisko" name="rescuer4" value={rescuer4} onChange={this.handleChange} />
        </li>
        <li>
          <input type="text" placeholder="nazwisko" name="rescuer5" value={rescuer5} onChange={this.handleChange} />
        </li>
      </ul>
    );
  }
}
export default CreateMultitude;
