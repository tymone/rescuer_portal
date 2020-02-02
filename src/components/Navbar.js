import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

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
          <div className="date">
            <i className="far fa-clock"></i>
            {`${this.date(date)}.${new Date(date).getFullYear()}r`}
          </div>
          <ul>
            <li>
              <NavLink to="/" exact>
                <i className="fas fa-home"></i>
                Strona główna
              </NavLink>
            </li>
            <li>
              <NavLink to="/harmonogram">
                <i className="far fa-calendar-alt"></i>
                <span>Harmonogram</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/druzyna">
                <i className="fas fa-users"></i>
                <span>Drużyna</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cwiczenia">
                <i className="fas fa-graduation-cap"></i>
                <span>Ćwiczenia</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/zadania">
                <i className="fas fa-tasks"></i>
                <span>Zadania</span>
              </NavLink>
            </li>
          </ul>
          <div className="login">
            <Link to="login">
              <i className="fas fa-sign-in-alt"></i>
              Logowanie
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
