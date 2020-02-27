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

  setLink = () => {
    const links = [
      { href: '/', icon: 'fas fa-home', title: 'Strona główna', exact: true },
      { href: '/harmonogram', icon: 'far fa-calendar-alt', title: 'Harmonogram' },
      { href: '/druzyna', icon: 'fas fa-users', title: 'Drużyna KSRG' },
      { href: '/cwiczenia', icon: 'fas fa-graduation-cap', title: 'Ćwiczenia' },
      { href: '/zadania', icon: 'fas fa-tasks', title: 'Zadania' }
    ];

    return links.map(link => (
      <li key={link.title}>
        <NavLink to={link.href} exact={link.exact ? link.exact : false}>
          <i className={link.icon}></i>
          {link.title}
        </NavLink>
      </li>
    ));
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
          <ul>{this.setLink()}</ul>
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
