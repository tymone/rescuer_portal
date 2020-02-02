import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import date from '../../helpers/setDate';
import actions from './duck/actions';

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
  componentWillMount() {
    const { tasks, match } = this.props;
    const getTask = tasks.find(task => task.id === Number(match.params.id));
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id, title, content, status, addDate, finishDate, createdBy, workingBy, finishedBy, redirect } = this.state;
    const { edit } = this.props;
    const editTask = {
      id,
      title,
      content,
      status,
      addDate: new Date(addDate).getTime(),
      finishDate: new Date(finishDate).getTime(),
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

  handleDelete = e => {
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
    const { history } = this.props;
    if (redirect) {
      return <Redirect to="/zadania" />;
    }
    return (
      <div className="editTask">
        <h1>Tryb edycji</h1>
        <div className="details">
          <form>
            <div className="textDetails">
              <label>
                <span>tytuł:</span>
                <input type="text" name="title" value={title} onChange={this.handleChange} />
              </label>
              <label>
                <span>treść:</span>
                <textarea type="text" name="content" value={content} onChange={this.handleChange} />
              </label>
            </div>
            <div className="infoDetails">
              <label>
                <span>status:</span>
                <select value={status} name="status" onChange={this.handleChange}>
                  <option value="to do">do zrobienia</option>
                  <option value="in progress">w trakcie wykonywania/nie ukończone</option>
                  <option value="done">wykonane</option>
                </select>
              </label>
              <label>
                <span>data dodania:</span>
                <input
                  type="text"
                  onFocus={e => (e.target.type = 'date')}
                  value={date(addDate)}
                  name="addDate"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <span>dodał:</span>
                <input type="text" value={createdBy} name="createdBy" onChange={this.handleChange} />
              </label>
              <label>
                <span>rozpoczęte przez:</span>
                <input type="text" value={workingBy} name="workingBy" onChange={this.handleChange} />
              </label>
              <label>
                <span>data zakończenia:</span>
                <input
                  type="text"
                  onFocus={e => (e.target.type = 'date')}
                  value={finishDate}
                  name="finishDate"
                  onChange={this.handleChange}
                />
              </label>
            </div>
          </form>
        </div>
        <div className="options">
          <i className="fas fa-chevron-left" onClick={() => history.goBack()}></i>
          <i className="fas fa-check" onClick={this.handleSubmit}></i>
          <i className="fas fa-trash-alt" onClick={this.handleDelete}></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.list
});

const mapDispatchToProps = dispatch => ({
  edit: (editTask, id) => dispatch(actions.edit(editTask, id)),
  remove: id => dispatch(actions.remove(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);
