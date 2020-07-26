import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Task } from 'components/Tasks/Template';
import actions from 'data/actions/tasks.actions';

class EditTask extends Component {
  state = {
    title: '',
    content: '',
    status: '',
    addDate: '',
    createdBy: '',
    workingBy: '',
    updatedBy: '',
    finishDate: '',
    finishedBy: '',
  };

  componentDidMount() {
    const { tasks, match } = this.props;
    const getTask = tasks.find((task) => task.id === Number(match.params.id));
    const {
      title,
      content,
      status,
      addDate,
      createdBy,
      workingBy,
      updatedBy,
      finishDate,
      finishedBy,
    } = getTask;
    this.setState({
      title,
      content,
      status,
      addDate,
      createdBy,
      workingBy,
      updatedBy,
      finishDate,
      finishedBy,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    const {
      title,
      content,
      status,
      addDate,
      finishDate,
      createdBy,
      workingBy,
      finishedBy,
      updatedBy,
    } = this.state;
    const {
      edit,
      match: {
        params: { id },
      },
      history,
    } = this.props;
    const updatedTask = {
      id: Number(id),
      title,
      content,
      status,
      addDate,
      finishDate,
      createdBy,
      workingBy,
      finishedBy,
      updatedBy,
    };
    edit(updatedTask, id);
    history.push('/zadania');
  };

  handleDelete = () => {
    const {
      remove,
      match: {
        params: { id },
      },
      history,
    } = this.props;
    remove(Number(id));
    history.push('/zadania');
  };

  render() {
    const { history } = this.props;

    return (
      <div className="editTask">
        <h1>Tryb edycji</h1>
        <Task type="update" details={this.state} handleChange={this.handleChange} />
        <div className="options">
          <i className="fas fa-chevron-left" onClick={history.goBack} />
          <i className="fas fa-check" onClick={this.handleSubmit} />
          <i className="fas fa-trash-alt" onClick={this.handleDelete} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks.list,
});

const mapDispatchToProps = (dispatch) => ({
  edit: (updatedTask, id) => dispatch(actions.edit(updatedTask, id)),
  remove: (id) => dispatch(actions.remove(id)),
});

EditTask.propTypes = {
  tasks: PropTypes.array,
  match: PropTypes.object,
  edit: PropTypes.func,
  history: PropTypes.object,
  remove: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);
