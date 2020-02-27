import React, { Component } from 'react';

class Multitude extends Component {
  state = {
    time: '',
    rescuer1: '',
    rescuer2: '',
    rescuer3: '',
    rescuer4: '',
    rescuer5: ''
  };

  componentDidMount() {
    const {
      type,
      details: { time, multitude }
    } = this.props;
    if (type === 'read' || 'update') {
      this.setState({
        time: time,
        rescuer1: multitude[0],
        rescuer2: multitude[1],
        rescuer3: multitude[2],
        rescuer4: multitude[3],
        rescuer5: multitude[4]
      });
    }
    if (type === 'create') {
      this.setState({
        rescuer1: '',
        rescuer2: '',
        rescuer3: '',
        rescuer4: '',
        rescuer5: ''
      });
    }
  }

  handleChange = (e) => {
    const { type } = this.props;
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      type === 'create' || 'update' ? () => this.handleSubmit(this.state) : null
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

  setItem = (type) => {
    const { rescuer1, rescuer2, rescuer3, rescuer4, rescuer5, time } = this.state;
    if (type === 'read') {
      return (
        <>
          <li className="rescuer">{time}</li>
          <li className="rescuer">{rescuer1}</li>
          <li className="rescuer">{rescuer2}</li>
          <li className="rescuer">{rescuer3}</li>
          <li className="rescuer">{rescuer4}</li>
          <li className="rescuer">{rescuer5}</li>
        </>
      );
    } else {
      return (
        <>
          <li className="rescuer">
            <input type="time" name="time" value={time} onChange={this.handleChange} />
          </li>
          <li className="rescuer">
            <input type="text" placeholder="nazwisko" name="rescuer1" value={rescuer1} onChange={this.handleChange} />
          </li>
          <li className="rescuer">
            <input type="text" placeholder="nazwisko" name="rescuer2" value={rescuer2} onChange={this.handleChange} />
          </li>
          <li className="rescuer">
            <input type="text" placeholder="nazwisko" name="rescuer3" value={rescuer3} onChange={this.handleChange} />
          </li>
          <li className="rescuer">
            <input type="text" placeholder="nazwisko" name="rescuer4" value={rescuer4} onChange={this.handleChange} />
          </li>
          <li className="rescuer">
            <input type="text" placeholder="nazwisko" name="rescuer5" value={rescuer5} onChange={this.handleChange} />
          </li>
        </>
      );
    }
  };

  render() {
    const { type } = this.props;
    return <ul>{this.setItem(type)}</ul>;
  }
}
export default Multitude;
