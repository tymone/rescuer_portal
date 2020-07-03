import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { StyledWrapper } from './StyledRescuer';
import { Title, Values } from './Details';

class RescuerTemplate extends Component {
  state = {
    id: '',
    name: '',
    surname: '',
    branch: '',
    minePosition: '',
    KSRGPosition: '',
    doctor: '',
    trainingGroup: '',
    osrg1: '',
    under1: '',
    ground1: '',
    osrg2: '',
    under2: '',
    ground2: '',
    duty: '',
    inaccessibleFrom: '',
    inaccessibleTo: '',
    suspend: '',
  };

  componentDidMount() {
    const { type } = this.props;
    if (type !== 'create') {
      const { rescuer } = this.props;
      const {
        id,
        name,
        surname,
        branch,
        minePosition,
        KSRGPosition,
        doctor,
        trainingGroup,
        included: { osrg1, under1, ground1, osrg2, under2, ground2 },
        duty,
        inaccessible: { from, to },
        suspend,
      } = rescuer;
      this.setState({
        id,
        name,
        surname,
        branch,
        minePosition,
        KSRGPosition,
        doctor,
        trainingGroup,
        osrg1,
        under1,
        ground1,
        osrg2,
        under2,
        ground2,
        duty,
        inaccessibleFrom: from,
        inaccessibleTo: to,
        suspend,
      });
    }
    if (type === 'create') {
      let { count } = this.props;
      this.setState({
        id: (count += 1),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      this.setRescuerToUpdate();
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleTrainingToggle = (name) => {
    this.setState({
      [name]: !this.state[name],
    });
  };

  setRescuerToUpdate = () => {
    const {
      id,
      name,
      surname,
      branch,
      minePosition,
      KSRGPosition,
      doctor,
      trainingGroup,
      osrg1,
      under1,
      ground1,
      osrg2,
      under2,
      ground2,
      duty,
      inaccessibleFrom,
      inaccessibleTo,
      suspend,
    } = this.state;
    const { getRescuer } = this.props;
    const rescuer = {
      id,
      name,
      surname,
      branch,
      minePosition,
      KSRGPosition,
      doctor,
      trainingGroup,
      included: { osrg1, under1, ground1, osrg2, under2, ground2 },
      duty,
      inaccessible: { from: inaccessibleFrom, to: inaccessibleTo },
      suspend,
    };
    getRescuer(rescuer);
  };

  render() {
    return (
      <StyledWrapper>
        <Title />
        <Values rescuer={this.state} handleChange={this.handleChange} handleToggle={this.handleTrainingToggle} />
      </StyledWrapper>
    );
  }
}

const mapStateToProps = ({ team }) => ({ count: team.count });

RescuerTemplate.propTypes = {
  type: PropTypes.string.isRequired,
  rescuer: PropTypes.object,
  count: PropTypes.number,
  getRescuer: PropTypes.func,
};

export default connect(mapStateToProps)(RescuerTemplate);
