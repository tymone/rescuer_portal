import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledOverMultitude, StyledCreateOverMultitude } from './StyledOverMultitude';

import Rescuer from '../Rescuer';

class OverMultitude extends Component {
  state = {
    loaded: false,
    Rescuers: [],
    newRescuer: '',
  };

  componentDidUpdate(prevProps) {
    const { overMultitude } = this.props;
    if (this.props !== prevProps) {
      this.setState({
        loaded: true,
        Rescuers: overMultitude,
      });
    }
  }

  saveOverMultitudeRescuer = () => {
    const { newRescuer } = this.state;
    const { getOverMultitude } = this.props;
    getOverMultitude(newRescuer);
    this.setState({
      newRescuer: '',
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getOverMultitude = (Rescuers) =>
    Rescuers.map((rescuer) => <Rescuer type="read" key={rescuer} name={rescuer} value={rescuer} />);

  render() {
    const { Rescuers, loaded, newRescuer } = this.state;
    const { type } = this.props;
    return (
      <StyledOverMultitude>
        <ul>{loaded ? this.getOverMultitude(Rescuers) : null}</ul>
        {type === 'create' ? (
          <StyledCreateOverMultitude>
            {'Dodaj ratownika poza zastępem -  '}
            <Rescuer
              type={type}
              name="newRescuer"
              value={newRescuer}
              handleChange={this.handleChange}
            />
            {newRescuer ? (
              <i className="fas fa-check" onClick={this.saveOverMultitudeRescuer} />
            ) : null}
          </StyledCreateOverMultitude>
        ) : null}
      </StyledOverMultitude>
    );
  }
}

OverMultitude.propTypes = {
  overMultitude: PropTypes.array,
  type: PropTypes.string.isRequired,
  getOverMultitude: PropTypes.func,
};

OverMultitude.defaultProps = {
  overMultitude: [],
};

export default OverMultitude;
