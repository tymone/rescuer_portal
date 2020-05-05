import React, { Component } from 'react';

import Rescuer from './Rescuer';

class OverMultitude extends Component {
  state = {
    toggle: false,
    newRescuer: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getIcon = () => {
    const { toggle } = this.state;
    return toggle ? (
      <i className="fas fa-user-check" onClick={this.addRescuer}></i>
    ) : (
      <i className="fas fa-user-plus" onClick={() => this.setState({ toggle: !toggle })}></i>
    );
  };

  addRescuer = () => {
    const { newRescuer, toggle } = this.state;
    const { overMultitude, getOverMultitude } = this.props;
    const newArr = [...overMultitude, newRescuer];
    this.setState({
      newRescuer: '',
      toggle: !toggle,
    });
    getOverMultitude(newArr);
  };

  removeRescuer = (rescuer) => {
    const { overMultitude, getOverMultitude } = this.props;
    const newArr = overMultitude.filter((rescuers) => rescuers !== rescuer);
    getOverMultitude(newArr);
  };

  getOverMultitude = (overMultitude, type) => {
    return overMultitude.map((rescuer) => (
      <li key={rescuer} className="rescuer">
        {type !== 'read' ? <i className="fas fa-user-minus" onClick={() => this.removeRescuer(rescuer)}></i> : null}
        {rescuer}
      </li>
    ));
  };
  render() {
    const { toggle, newRescuer } = this.state;
    const { overMultitude, type } = this.props;
    return (
      <>
        {this.getOverMultitude(overMultitude, type)}
        {toggle ? <Rescuer type={type} value={newRescuer} name="newRescuer" handleChange={this.handleChange} /> : null}
        {type !== 'read' ? this.getIcon() : null}
      </>
    );
  }
}

export default OverMultitude;
