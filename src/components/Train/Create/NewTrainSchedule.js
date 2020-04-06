import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import { Redirect } from 'react-router';

import Head from '../Template/Table/Head';
import Body from '../Template/Table/Body';

class NewTrainSchedule extends Component {
  state = {
    year: '',
    id: 1,
    osrg1: '',
    under1: '',
    ground1: '',
    osrg2: '',
    under2: '',
    ground2: '',
    groups: {},
    redirect: false
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addGroup = () => {
    let { id, osrg1, under1, ground1, osrg2, under2, ground2 } = this.state;

    this.setState((prevState) => ({
      groups: {
        ...prevState.groups,
        [`group${id}`]: { id, osrg1, under1, ground1, osrg2, under2, ground2 }
      },
      id: ++id
    }));
  };

  removeGroup = (groupId) => {
    let { groups, id } = this.state;
    delete groups[`group${groupId}`];
    this.setState({
      groups,
      id: --id
    });
  };

  handleSubmit = () => {
    const { year, groups } = this.state;
    const { add } = this.props;
    const newTrainSchedule = {
      year,
      groups
    };

    add(newTrainSchedule);
    const { redirect } = this.state;
    this.setState({
      redirect: !redirect
    });
  };

  render() {
    const { redirect, year, groups } = this.state;
    const { history } = this.props;
    if (redirect) {
      return <Redirect to="/cwiczenia" />;
    }
    return (
      <div className="train">
        <div className="title">
          <h1>Nowy harmonogram ćwiczeń na rok:</h1>
          <input type="text" name="year" value={year} onChange={this.handleChange} />
        </div>
        <div className="table">
          <Head type="create" />
          <Body
            handleChange={this.handleChange}
            addGroup={this.addGroup}
            list={groups}
            removeGroup={this.removeGroup}
            type="create"
          />
        </div>
        <div className="options">
          <i className="fas fa-chevron-left" onClick={history.goBack}></i>
          <i className="fas fa-calendar-check" onClick={this.handleSubmit}></i>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (newTrainSchedule) => dispatch(actions.add(newTrainSchedule))
});

export default connect(null, mapDispatchToProps)(NewTrainSchedule);
