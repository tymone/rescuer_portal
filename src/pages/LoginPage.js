import React, { Component } from "react";
import "../styles/LoginPage.css";

export default class HomePage extends Component {
  state = {
    login: "",
    password: "",
    // check: false,

    errors: {
      login: false,
      password: false
      // check: false
    }
  };

  messages = {
    login: "Nieprawidłowa nazwa użytkownika.",
    password: "Nieprawidłowe hasło."
    // check: "Brak zgody."
  };

  handleChange = e => {
    const name = e.target.name;
    const type = e.target.type;

    if (type === "text" || type === "password") {
      const value = e.target.value;
      this.setState({
        [name]: value
      });
    }
    // else if (type === "checkbox") {
    //   const checked = e.target.checked;
    //   this.setState({
    //     [name]: checked
    //   });
    // }
  };

  handleSubmit = e => {
    e.preventDefault();
    const validation = this.formValidation();
    if (validation.correct) {
      this.setState({
        login: "",
        password: "",
        // check: false,
        errors: {
          login: false,
          password: false
          // check: false
        }
      });
    } else {
      this.setState({
        errors: {
          login: !validation.login,
          password: !validation.password
          // check: !validation.check
        }
      });
    }
  };

  formValidation = () => {
    let login = false;
    let password = false;
    // let check = false;
    let correct = false;
    if (this.state.login.length) {
      login = true;
    }
    if (this.state.password.length) {
      password = true;
    }
    // if (this.state.check) {
    //   check = true;
    // }
    if (login && password) {
      correct = true;
    }
    return {
      login,
      password,
      // check,
      correct
    };
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="loginPage">
        <label htmlFor="login">
          <p>Login:</p>
          <input
            type="text"
            id="login"
            name="login"
            value={this.state.login}
            onChange={this.handleChange}
          />
          {this.state.errors.login && <span>{this.messages.login}</span>}
        </label>
        <label htmlFor="password">
          <p>Hasło:</p>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          {this.state.errors.password && <span>{this.messages.password}</span>}
        </label>
        {/* <label htmlFor="accept" className="clearfix">
          <input
            type="checkbox"
            id="accept"
            name="check"
            checked={this.state.check}
            onChange={this.handleChange}
          />
          <p>Zgoda</p>
        </label>
        {this.state.errors.check && <span> {this.messages.check}</span>} */}
        <button>Zaloguj</button>
      </form>
    );
  }
}
