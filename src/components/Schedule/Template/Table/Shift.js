import React, { Component } from 'react';

import Multitude from './Multitude';
import OverMultitude from './OverMultitude';

class Shift extends Component {
  state = {
    time: '',
    multitude: [],
    overMultitude: [],
  };

  componentWillMount() {
    const { type } = this.props;
    if (type !== 'create') {
      const {
        shift: { multitude, time, overMultitude },
      } = this.props;
      this.setState({
        time,
        multitude,
        overMultitude,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { type } = this.props;
    if (this.state !== prevState) {
      if (type !== 'read') {
        this.handleSubmit();
      }
    }
  }

  handleSubmit = () => {
    const { time, multitude, overMultitude } = this.state;
    const { day, multitudeName, getDay } = this.props;
    const newShift = {
      day,
      multitudeName,
      time,
      multitude,
      overMultitude,
    };

    getDay(newShift);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getNewMultitude = (multitude) => {
    this.setState({
      multitude,
    });
  };

  getNewOverMultitude = (overMultitude) => {
    this.setState({
      overMultitude,
    });
  };

  render() {
    const { type } = this.props;
    const { multitude, overMultitude, time } = this.state;
    return (
      <>
        {type === 'read' ? (
          <div className="time">{time}</div>
        ) : (
          <input type="time" value={time} name="time" onChange={this.handleChange} />
        )}
        <ul>
          <Multitude type={type} multitude={multitude} getNewMultitude={this.getNewMultitude} />
          <OverMultitude type={type} overMultitude={overMultitude} getOverMultitude={this.getNewOverMultitude} />
        </ul>
      </>
    );
  }
}
export default Shift;
