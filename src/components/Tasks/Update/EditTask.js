import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import actions from '../duck/actions';
import Details from './Details';

class EditTask extends Component {
  state = {
    id: '',
    title: '',
    content: '',
    status: '',
    addDate: '',
    finishDate: '',
    createdBy: '',
    workingBy: '',
    finishedBy: '',
    updatedBy: '',
    redirect: false
  };
  componentDidMount() {
    const { tasks, match } = this.props;
    const getTask = tasks.find((task) => task.id === Number(match.params.id));
    const { id, title, content, status, addDate, finishDate, createdBy, workingBy, finishedBy } = getTask;
    this.setState({
      id,
      title,
      content,
      status,
      addDate,
      finishDate: finishDate ? finishDate : '-',
      createdBy,
      workingBy: workingBy ? workingBy : '-',
      finishedBy
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, title, content, status, addDate, finishDate, createdBy, workingBy, finishedBy, redirect } = this.state;
    const { edit } = this.props;
    const editTask = {
      id,
      title,
      content,
      status,
      addDate,
      finishDate,
      updateDate: new Date().getTime(),
      createdBy,
      workingBy,
      finishedBy,
      updateBy: ''
    };
    edit(editTask, id);
    this.setState({
      redirect: !redirect
    });
  };

  handleDelete = (e) => {
    e.preventDefault();
    const { id, redirect } = this.state;
    const { remove } = this.props;
    remove(id);
    this.setState({
      redirect: !redirect
    });
  };

  render() {
    const { title, content, status, addDate, finishDate, createdBy, workingBy, redirect } = this.state;
    const details = { title, content, status, addDate, finishDate, createdBy, workingBy };
    const { history } = this.props;
    if (redirect) {
      return <Redirect to="/zadania" />;
    }
    return (
      <div className="editTask">
        <h1>Tryb edycji</h1>
        <Details details={details} handleChange={this.handleChange} />
        <div className="options">
          <i className="fas fa-chevron-left" onClick={history.goBack}></i>
          <i className="fas fa-check" onClick={this.handleSubmit}></i>
          <i className="fas fa-trash-alt" onClick={this.handleDelete}></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks.list
});

const mapDispatchToProps = (dispatch) => ({
  edit: (editTask, id) => dispatch(actions.edit(editTask, id)),
  remove: (id) => dispatch(actions.remove(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);
