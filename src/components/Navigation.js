import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const handleClick = () => {
    let sidebar = document.querySelector('aside');
    sidebar.classList.toggle('hide');
    let font = document.querySelector('aside div i');
    font.classList.toggle('fa-angle-double-right');
  };

  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to={'/'} exact>
              Strona Główna
            </NavLink>
          </li>
          <li>
            <NavLink to={'/harmonogram'} exact>
              Harmonogram
            </NavLink>
          </li>
          <ul>
            <li>
              <NavLink to={'/harmonogram/stworz'}>utwórz</NavLink>
            </li>
            <li>
              <NavLink to={'/harmonogram/edytuj'}>edytuj</NavLink>
            </li>
          </ul>
          <li>
            <NavLink to={'/druzyna'} exact>
              Drużyna
            </NavLink>
          </li>
          <ul>
            <li>
              <NavLink to={'/druzyna/dodaj'}>dodaj</NavLink>
            </li>
          </ul>
          <li>
            <NavLink to={'/cwiczenia'} exact>
              Ćwiczenia
            </NavLink>
          </li>
          <ul>
            <li>
              <NavLink to={'/cwiczenia/edytuj'}>edytuj</NavLink>
            </li>
          </ul>
          <li>
            <NavLink to={'/zadania'} exact>
              Zadania
            </NavLink>
          </li>
          <ul>
            <li>
              <NavLink to={'/zadania/dodaj'}>dodaj</NavLink>
            </li>
          </ul>
          <li>
            <NavLink to={'/kontakt'}>Kontakt</NavLink>
          </li>
        </ul>
      </nav>
      <div className="navigation" onClick={handleClick}>
        <i className="fas fa-angle-double-left"></i>
      </div>
    </aside>
  );
};

export default Navigation;
