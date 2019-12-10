import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

class Navbar extends Component {
  state = {
    date: new Date().getTime()
  };

  date = (currentDate) => {
    let day = new Date(currentDate).getDate()
    let month = new Date(currentDate).getMonth() + 1
   

    return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}`
  }

  render() {
    
    return (
      <header>
        <nav>
          <div>{this.date(this.state.date) + '.' + new Date(this.state.date).getFullYear() + 'r'}</div>
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
