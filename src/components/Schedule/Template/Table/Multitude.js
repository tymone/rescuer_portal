import React, { Component } from 'react';

import Rescuer from './Rescuer';

class Multitude extends Component {
  state = {
    rescuer1: '',
    rescuer2: '',
    rescuer3: '',
    rescuer4: '',
    rescuer5: '',
  };

  componentDidMount() {
    const { type, getNewMultitude } = this.props;
    if (type === 'create') {
      const newMultitude = ['---', '---', '---', '---', '---'];
      getNewMultitude(newMultitude);
    }
    if (type === 'update') {
      const { multitude } = this.props;
      this.setState({
        rescuer1: multitude[0],
        rescuer2: multitude[1],
        rescuer3: multitude[2],
        rescuer4: multitude[3],
        rescuer5: multitude[4],
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { rescuer1, rescuer2, rescuer3, rescuer4, rescuer5 } = this.state;
    const { type, getNewMultitude } = this.props;
    let newMultitude;
    if (this.state !== prevState) {
      if (type === 'create') {
        newMultitude = [
          rescuer1 ? rescuer1 : '---',
          rescuer2 ? rescuer2 : '---',
          rescuer3 ? rescuer3 : '---',
          rescuer4 ? rescuer4 : '---',
          rescuer5 ? rescuer5 : '---',
        ];
      }
      if (type === 'update') {
        newMultitude = [rescuer1, rescuer2, rescuer3, rescuer4, rescuer5];
      }
      return getNewMultitude(newMultitude);
    }
  }

  getRescuers = () => {
    const { type } = this.props;
    let multitude;
    if (type === 'read') {
      multitude = this.props.multitude;
    } else {
      multitude = Object.keys(this.state);
    }
    return multitude.map((rescuer) => (
      <Rescuer key={rescuer} type={type} name={rescuer} value={this.state[rescuer]} handleChange={this.handleChange} />
    ));
  };

  render() {
    return <>{this.getRescuers()}</>;
  }
}

export default Multitude;
