import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SubLink from './SubLink';
import { StyledSidebar, StyledNav, StyledUl } from './StyledSidebar';

class Sidebar extends Component {
  setLink = () => {
    const links = [
      { href: '/', icon: 'fas fa-home', title: 'Strona główna', exact: true },
      {
        href: '/harmonogram',
        icon: 'far fa-calendar-alt',
        title: 'Harmonogram',
        sublinks: ['dodaj', 'edytuj'],
      },
      { href: '/druzyna', icon: 'fas fa-users', title: 'Drużyna KSRG', sublinks: ['dodaj'] },
      {
        href: '/cwiczenia',
        icon: 'fas fa-graduation-cap',
        title: 'Ćwiczenia',
        sublinks: ['dodaj', 'edytuj'],
      },
      { href: '/zadania', icon: 'fas fa-tasks', title: 'Zadania', sublinks: ['dodaj', 'edytuj'] },
    ];

    return links.map((link) => (
      <li key={link.title}>
        <NavLink to={link.href} exact={link.exact ? link.exact : false}>
          <i className={link.icon} />
          {link.title}
        </NavLink>
        {link.sublinks ? <SubLink links={link} /> : null}
      </li>
    ));
  };

  render() {
    const { sidebarStatus } = this.props;
    return (
      <StyledSidebar sidebarStatus={sidebarStatus}>
        <StyledNav>
          <StyledUl>{this.setLink()}</StyledUl>
        </StyledNav>
      </StyledSidebar>
    );
  }
}

export default Sidebar;
