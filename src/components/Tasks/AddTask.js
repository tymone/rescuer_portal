import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import actions from './duck/actions';

class AddTask extends Component {
  state = {
    title: '',
    content: '',
    status: 'to do',
    addDate: '',
    finishDate: '',
    createdBy: '',
    workingBy: '',
    finishedBy: '',
    updatedBy: '',
    redirect: false
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTask = (e) => {
    e.preventDefault();

    const { title, content, status, addDate, finishDate, createdBy, workingBy, finishedBy, redirect } = this.state;
    const { counter, add } = this.props;
    const id = counter + 1;
    const newTask = {
      id,
      title,
      content,
      status,
      addDate: new Date(addDate).getTime(),
      finishDate: new Date(finishDate).getTime(),
      createdBy,
      workingBy,
      finishedBy
    };
    add(newTask);
    this.setState({
      title: '',
      content: '',
      status: '',
      addDate: '',
      finishDate: '',
      createdBy: '',
      workingBy: '',
      finishedBy: '',
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
      <div className="addTask">
        <h1>Utwórz zadanie</h1>
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
                <input type="text" onFocus={(e) => (e.target.type = 'date')} value={addDate} name="addDate" onChange={this.handleChange} />
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
                  onFocus={(e) => (e.target.type = 'date')}
                  value={finishDate}
                  name="finishDate"
                  onChange={this.handleChange}
                />
              </label>
            </div>
          </form>
        </div>
        <div className="options">
          <i className="fas fa-chevron-left" onClick={history.goBack}></i>
          <i className="fas fa-check" onClick={this.addTask}></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks.list,
  counter: state.tasks.counter
});

const mapDispatchToProps = (dispatch) => ({
  add: (newTask) => dispatch(actions.add(newTask))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
