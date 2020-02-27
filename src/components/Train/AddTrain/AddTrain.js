import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import { Redirect } from 'react-router';

import Head from '../Table/Head';
import Body from '../Table/Body';
import AddedGroup from './AddedGroup';
import AddGroup from './AddGroup';

class NewTrainSchedule extends Component {
  state = {
    year: '',
    groups: {},
    redirect: false
  };

  handleChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value
    });

  addGroup = (currentlyAddedGroup) => {
    const { year } = this.state;
    const { osrg1, under1, ground1, osrg2, under2, ground2 } = currentlyAddedGroup;
    const groupNumber = Object.keys(this.state.groups).length + 1;

    let group = [osrg1, under1, ground1, osrg2, under2, ground2];

    this.setState((prevState) => ({
      year: Number(year),
      groups: {
        ...prevState.groups,
        [`group${groupNumber}`]: group
      }
    }));
  };

  addedRow = () => {
    const { groups } = this.state;
    const currentGroupList = Object.keys(groups);
    return currentGroupList.map((group) => <AddedGroup details={groups[group]} number={currentGroupList.indexOf(group) + 1} />);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { year, groups, redirect } = this.state;
    const { add } = this.props;

    const newTrainSchedule = {
      year,
      groups
    };

    add(newTrainSchedule);

    this.setState({
      redirect: !redirect
    });
  };

  render() {
    const { redirect, groups } = this.state;
    const { history } = this.props;
    const groupNumber = Object.keys(groups).length + 1;
    if (redirect) {
      return <Redirect to={'/cwiczenia'} />;
    }
    return (
      <div className="newTrainSchedule">
        <h1>Nowy harmonogram ćwiczeń</h1>
        <label>
          na rok: <input type="text" value={this.state.year} name="year" onChange={this.handleChange} />
        </label>
        <div className="table">
          <Head title={['Grupa', 'OSRG 1', 'Dołowe 1', 'Powierzchnia 1', 'OSRG 2', 'Dołowe 2', 'Powierzchnia 2', 'dodaj']} />
          {Object.keys(groups).length ? <Body list={this.addedRow()} /> : null}
          <AddGroup getGroup={this.addGroup} number={groupNumber} />
        </div>
        <div className="options">
          <i className="fas fa-chevron-left" onClick={() => history.goBack()}></i>
          <i className="far fa-calendar-check" onClick={this.handleSubmit}></i>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (newTrainSchedule) => dispatch(actions.add(newTrainSchedule))
});

export default connect(null, mapDispatchToProps)(NewTrainSchedule);
