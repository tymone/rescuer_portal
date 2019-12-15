import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    date: new Date().getTime()
  };

  date = currentDate => {
    let day = new Date(currentDate).getDate();
    let month = new Date(currentDate).getMonth() + 1;

    return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}`;
  };

  render() {
    const { date } = this.state;
    return (
      <header>
        <nav>
          <div>{`${this.date(date)}.${new Date(date).getFullYear()}r`}</div>
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
