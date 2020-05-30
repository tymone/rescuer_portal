import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledMultitude } from './StyledMultitude';

import Rescuer from '../Rescuer';

class Multitude extends Component {
  state = {
    loaded: false,
    rescuer1: '',
    rescuer2: '',
    rescuer3: '',
    rescuer4: '',
    rescuer5: '',
  };

  componentDidUpdate(prevProps) {
    const { multitude } = this.props;
    if (this.props !== prevProps) {
      this.setState({
        loaded: true,
        rescuer1: multitude[0],
        rescuer2: multitude[1],
        rescuer3: multitude[2],
        rescuer4: multitude[3],
        rescuer5: multitude[4],
      });
    }
  }

  handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => this.sendMultitudeToShift()
    );
  };

  getRescuers = () => {
    const { rescuer1, rescuer2, rescuer3, rescuer4, rescuer5 } = this.state;
    const { type } = this.props;
    let multitude;
    if (type === 'read') {
      multitude = [rescuer1, rescuer2, rescuer3, rescuer4, rescuer5];
    } else {
      multitude = { rescuer1, rescuer2, rescuer3, rescuer4, rescuer5 };
      multitude = Object.keys(multitude);
    }
    return multitude.map((rescuer) => (
      <Rescuer key={rescuer} type={type} name={rescuer} value={this.state[rescuer]} handleChange={this.handleChange} />
    ));
  };

  sendMultitudeToShift = () => {
    const { rescuer1, rescuer2, rescuer3, rescuer4, rescuer5 } = this.state;
    const { getMultitude } = this.props;
    const multitude = [rescuer1 || '---', rescuer2 || '---', rescuer3 || '---', rescuer4 || '---', rescuer5 || '---'];
    getMultitude(multitude);
  };

  render() {
    const { loaded } = this.state;
    return (
      <StyledMultitude>
        <ul>{loaded ? this.getRescuers() : null}</ul>
      </StyledMultitude>
    );
  }
}

Multitude.propTypes = {
  multitude: PropTypes.array,
  type: PropTypes.string.isRequired,
  getMultitude: PropTypes.func,
};

export default Multitude;
