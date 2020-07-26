import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import actions from 'data/actions/trainingGroups.actions';

import { Table } from '../Template';

class EditTrain extends Component {
  state = {
    year: '',
    groups: {},
    redirect: false,
  };

  componentDidMount() {
    const { match, list } = this.props;
    const getSchedule = list.find((schedule) => schedule.year === Number(match.params.id));
    const { year, groups } = getSchedule;

    this.setState({
      year,
      groups,
    });
  }

  handleChange = (id, name, value) => {
    this.setState((prevState) => ({
      ...prevState,
      groups: {
        ...prevState.groups,
        [id]: {
          ...prevState.groups[id],
          [name]: value,
        },
      },
    }));
  };

  handleChangeYear = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    const { year, groups } = this.state;
    const { update } = this.props;
    const newList = {
      year,
      groups,
    };
    update(newList);
    this.setState({
      redirect: true,
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
          type="update"
          title="Edycja harmonogramu na rok"
          schedule={this.state}
          handleChange={this.handleChange}
          handleChangeYear={this.handleChangeYear}
        />
        <div className="options">
          <i className="fas fa-chevron-left" onClick={history.goBack} />
          <i className="fas fa-calendar-check" onClick={this.handleSubmit} />
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ trainingGroups: list }) => list;

const mapDispatchToProps = (dispatch) => ({
  update: (newList) => dispatch(actions.update(newList)),
});

EditTrain.propTypes = {
  history: PropTypes.object,
  list: PropTypes.array,
  match: PropTypes.object,
  update: PropTypes.func,
};

EditTrain.defaultProps = {
  history: {},
  list: [],
  match: {},
};
export default connect(mapStateToProps, mapDispatchToProps)(EditTrain);
