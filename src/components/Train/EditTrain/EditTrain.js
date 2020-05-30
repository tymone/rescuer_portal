import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import { Redirect } from 'react-router-dom';

import Head from '../Template/Table/Head';
import Body from '../Template/Table/Body';

class EditTrain extends Component {
  state = {
    redirect: false,
    year: '',
    id: '',
    group: '',
    osrg1: '',
    under1: '',
    ground1: '',
    osrg2: '',
    under2: '',
    ground2: '',
    groups: {}
  };
  componentDidMount() {
    const { match, list } = this.props;
    const id = match.params.id;
    const editList = list.filter((item) => item.year === Number(id))[0];
    const { groups, year } = editList;
    this.setState({
      year,
      groups
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmitGroupDate = (editedValue) => {
    const { id, osrg1, under1, ground1, osrg2, under2, ground2 } = editedValue;
    this.setState((prevState) => ({
      groups: {
        ...prevState.groups,
        [`group${id}`]: { id, osrg1, under1, ground1, osrg2, under2, ground2 }
      }
    }));
  };

  handleSubmit = () => {
    const { year, groups, redirect } = this.state;
    const { update } = this.props;
    const newList = { year, groups };
    update(newList);
    this.setState({
      redirect: !redirect
    });
  };

  render() {
    const { groups, year, redirect } = this.state;
    const { history } = this.props;

    if (redirect) {
      return <Redirect to="/cwiczenia" />;
    }

    return (
      <div className="train">
        <h1>Edycja harmonogramu ćwiczeń na rok {year}</h1>
        <div className="table">
          <Head type="create" />
          <Body list={groups} submitGroup={this.handleSubmitGroupDate} type="edit" />
        </div>
        <div className="options">
          <i className="fas fa-chevron-left" onClick={history.goBack}></i>
          <i className="fas fa-calendar-check" onClick={this.handleSubmit}></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ trainingGroups: list }) => list;
const mapDispatchToProps = (dispatch) => ({
  update: (newList) => dispatch(actions.update(newList))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTrain);