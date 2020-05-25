import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import { Redirect } from 'react-router-dom';

import ReadDetails from './ReadDetails';
import EditDetails from '../Update/EditDetails';

class RescuerDetails extends Component {
  state = {
    editMode: false,
    redirect: false,
    id: '',
    name: '',
    surname: '',
    branch: '',
    minePosition: '',
    KSRGPosition: '',
    doctor: '',
    trainingGroup: '',
    duty: '',
    included: '',
    suspend: '',
  };

  componentDidMount() {
    const { team, match } = this.props;
    const [rescuer] = team.filter((rescuer) => rescuer.id === Number(match.params.id));
    const {
      id,
      name,
      surname,
      branch,
      minePosition,
      KSRGPosition,
      doctor,
      trainingGroup,
      duty,
      included,
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
      duty,
      included,
      suspend,
    });
  }
  toggleEditMode = () => {
    const { editMode } = this.state;
    this.setState({
      editMode: !editMode,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  changeTrainingIncludeValue = (name) => {
    this.setState((prevState) => ({
      ...prevState,
      included: {
        ...prevState.included,
        [name]: !this.state.included[name],
      },
    }));
  };

  handleSubmit = () => {
    const { update } = this.props;
    const {
      id,
      name,
      surname,
      branch,
      minePosition,
      KSRGPosition,
      doctor,
      trainingGroup,
      duty,
      included,
      suspend,
      redirect,
    } = this.state;
    const updatedRescuer = {
      id,
      name,
      surname,
      branch,
      minePosition,
      KSRGPosition,
      doctor,
      trainingGroup,
      duty,
      included,
      suspend,
    };

    update(updatedRescuer);
    this.setState({
      redirect: !redirect,
    });
  };

  handleRemove = () => {
    const { id, redirect } = this.state;
    const { remove } = this.props;

    remove(id);
    this.setState({
      redirect: !redirect,
    });
  };

  render() {
    const { editMode, name, surname, redirect } = this.state;
    const { history } = this.props;
    if (redirect) {
      return <Redirect to="/druzyna" />;
    }
    return (
      <>
        <h1>
          {editMode ? `Tryb edycji - ` : null} {name} {surname}
        </h1>
        <div>
          {editMode ? (
            <EditDetails
              rescuer={this.state}
              handleChange={this.handleChange}
              changeTrainingIncludeValue={this.changeTrainingIncludeValue}
            />
          ) : (
            <ReadDetails rescuer={this.state} />
          )}
        </div>
        <div className="options">
          <i className="fas fa-chevron-left" onClick={history.goBack}></i>
          {editMode ? (
            <>
              <i className="fas fa-user-check" title="zapisz zmiany" onClick={this.handleSubmit}></i>
              <i className="fas fa-user-times" title="usuń ratownika z drużyny" onClick={this.handleRemove}></i>
            </>
          ) : (
            <i className="fas fa-user-edit" onClick={this.toggleEditMode}></i>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  team: state.team.list,
});

const mapDispatchToProps = (dispatch) => ({
  update: (rescuer) => dispatch(actions.update(rescuer)),
  remove: (id) => dispatch(actions.remove(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RescuerDetails);
