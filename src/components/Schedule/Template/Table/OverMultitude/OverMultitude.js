import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledOverMultitude, StyledButton } from './StyledOverMultitude';

import Rescuer from '../Rescuer';

class OverMultitude extends Component {
  state = {
    loaded: false,
    addNewRescuer: false,
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
      addNewRescuer: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getOverMultitude = (Rescuers) =>
    Rescuers.map((rescuer) => <Rescuer type="read" key={rescuer} name={rescuer} value={rescuer} />);

  toggleButton = () => {
    this.setState({
      addNewRescuer: true,
    });
  };

  render() {
    const { Rescuers, loaded, newRescuer, addNewRescuer } = this.state;
    const { type } = this.props;
    return (
      <StyledOverMultitude>
        <ul>{loaded ? this.getOverMultitude(Rescuers) : null}</ul>
        {addNewRescuer ? (
          <Rescuer
            type={type}
            name="newRescuer"
            value={newRescuer}
            handleChange={this.handleChange}
          />
        ) : null}
        {type !== 'read' ? (
          <StyledButton onClick={addNewRescuer ? this.saveOverMultitudeRescuer : this.toggleButton}>
            {addNewRescuer ? 'zapisz' : 'dodaj poza zastępem'}
          </StyledButton>
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
