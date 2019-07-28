import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

class Navbar extends Component {
  state = {
    date: new Date().toLocaleDateString()
  };

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
