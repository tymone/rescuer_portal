import React, { Component } from "react";
import { connect } from "react-redux";

import actions from "./duck/actions";

class AddTask extends Component {
  state = {
    title: "",
    value: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTask = e => {
    e.preventDefault();

    const { title, value } = this.state;
    const { counter, add } = this.props;
    const id = counter + 1;
    const newTask = {
      id,
      title,
      value,
      active: true,
      addDate: new Date().getTime(),
      finishDate: ""
    };
    add(newTask);
    this.setState({
      title: "",
      value: ""
    });
  };

  render() {
    return (
      <div className="TasksMain">
        <div className="addTask">
          <form onSubmit={this.addTask}>
            <label>
              Tytuł zadania:
              <input
                type="text"
                placeholder="Wpisz tytuł"
                onChange={this.handleChange}
                name="title"
                value={this.state.title}
                required
              />
            </label>
            <label>
              Treść zadania:
              <textarea
                type="text"
                placeholder="Wpisz treść"
                onChange={this.handleChange}
                name="value"
                value={this.state.value}
                required
              />
            </label>

            <button>Zapisz</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.list,
  counter: state.tasks.counter
});

const mapDispatchToProps = dispatch => ({
  add: newTask => dispatch(actions.add(newTask))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
