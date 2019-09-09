import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css';

const Navigation = () => {
  const list = [
    { name: 'Start', path: '/', exact: true },
    { name: 'Harmonogram', path: '/harmonogram' },
    { name: 'Drużyna', path: '/druzyna' },
    { name: 'Ćwiczenia', path: '/cwiczenia' },
    { name: 'Lista zadań', path: '/zadania' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));

  const handleClick = () => {
    let sidebar = document.querySelector('aside')
    sidebar.classList.toggle('hide')
    let font = document.querySelector('aside div i')
    font.classList.toggle('fa-angle-double-right')
  }

  return (
    <aside>
      <nav>
        <ul>{menu}</ul>
      </nav>
      <div className="navigation" onClick={handleClick}><i className="fas fa-angle-double-left"></i></div>
    </aside>
  );
};

export default Navigation;
