import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import actions from 'data/actions/trainingGroups.actions';

import { Table } from '../Template';

class CreateGroup extends Component {
  state = {
    id: '',
    osrg1: '',
    under1: '',
    ground1: '',
    osrg2: '',
    under2: '',
    ground2: '',
    year: '',
    groups: {},
    redirect: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getGroup = () => {
    const { id, osrg1, under1, ground1, osrg2, under2, ground2 } = this.state;
    this.setState((prevState) => ({
      groups: {
        ...prevState.groups,
        [id]: { id, osrg1, under1, ground1, osrg2, under2, ground2 },
      },
      id: '',
      osrg1: '',
      under1: '',
      ground1: '',
      osrg2: '',
      under2: '',
      ground2: '',
    }));
  };

  removeGroup = (id) => {
    const { groups } = this.state;
    delete groups[id];
    this.setState({
      groups,
    });
  };

  handleSubmit = () => {
    const { year, groups, redirect } = this.state;
    const { add } = this.props;
    const newTrainSchedule = {
      year: Number(year),
      groups,
    };
    add(newTrainSchedule);

    this.setState({
      redirect: !redirect,
    });
  };

  render() {
    const { redirect } = this.state;
    const { history } = this.props;
    if (redirect) {
      return <Redirect to="/cwiczenia" />;
    }
    return (
      <>
        <Table
          type="create"
          title="Nowy harmonogram na rok"
          schedule={this.state}
          handleChange={this.handleChange}
          getGroup={this.getGroup}
          removeGroup={this.removeGroup}
        />
        <div className="options">
          <i className="fas fa-chevron-left" onClick={history.goBack} />
          <i className="fas fa-calendar-check" onClick={this.handleSubmit} />
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (newTrainSchedule) => dispatch(actions.add(newTrainSchedule)),
});

CreateGroup.propTypes = {
  history: PropTypes.object,
  add: PropTypes.func,
};

CreateGroup.defaultProps = {
  history: {},
};

export default connect(null, mapDispatchToProps)(CreateGroup);
