import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css';

const Navigation = () => {
  const list = [
    { name: 'Start', path: '/', exact: true },
    { name: 'Drużyna', path: '/druzyna' },
    { name: 'Kontakt', path: '/kontakt' },
    { name: 'Lista zadań', path: '/zadania' },
    { name: 'Harmonogram', path: '/harmonogram' }
  ];

  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <aside>
      <nav>
        <ul>{menu}</ul>
      </nav>
    </aside>
  );
};

export default Navigation;
