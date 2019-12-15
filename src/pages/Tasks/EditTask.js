/* eslint-disable eqeqeq */
import React, { Component } from "react";
import { connect } from "react-redux";

import actions from "./duck/actions";

class EditTask extends Component {
  state = {
    id: "",
    title: "",
    content: "",
    active: ""
  };
  componentDidMount() {
    const [getTask] = this.props.tasks.filter(
      task => task.id == this.props.match.params.id
    );
    const { id, title, content, active } = getTask;
    this.setState({
      id,
      title,
      content,
      active: active ? "true" : "false"
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      active: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, content, active } = this.state;
    const [getTask] = this.props.tasks.filter(
      task => task.id == this.props.match.params.id
    );
    const { id } = getTask;
    const { edit } = this.props;
    const editTask = {
      id,
      title,
      content,
      active: active === "true" ? true : false,
      finishDate: new Date().getTime(),
      updateDate: new Date().getTime(),
      updateBy: ""
    };
    edit(editTask, id);
  };

  handleDelete = e => {
    e.preventDefault();
    const { id } = this.state;
    const { remove } = this.props;
    remove(id);
  };

  render() {
    return (
      <div className="editTask">
        <form>
          <label>
            tytuł:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <label>
            treść:
            <input
              type="text"
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </label>
          <label>
            status:
            <select value={this.state.active} onChange={this.handleChange}>
              <option value="true">do zrobienia</option>
              <option value="false">zrobione</option>
            </select>
          </label>
          <button onClick={this.handleSubmit}>Zapisz zmiany</button>
          <button onClick={this.handleDelete}>Usuń</button>
        </form>
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
