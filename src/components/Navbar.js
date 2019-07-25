import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

class Navbar extends Component {
  state = {
    date: ""
  };

  handleDate = () => {
    const date = new Date().toLocaleDateString();
    this.setState({
      date
    });
  };

  componentDidMount() {
    this.date = setInterval(this.handleDate, 1000);
  }

  render() {
    return (
      <header>
        <nav>
          <div>{this.state.date}</div>
          <div>
            <Link to="login" style={{ textDecoration: "none", color: "white" }}>
              Logowanie
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
