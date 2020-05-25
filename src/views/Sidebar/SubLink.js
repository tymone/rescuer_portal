import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledSublink } from './StyledSidebar';

class SubLink extends Component {
  setSublink = (links) => {
    const sublinks = links.sublinks;
    return sublinks.map((link) => (
      <li key={link}>
        <NavLink to={`${links.href}/${link}`}>{link}</NavLink>
      </li>
    ));
  };

  render() {
    const { links } = this.props;
    return <StyledSublink>{this.setSublink(links)}</StyledSublink>;
  }
}

export default SubLink;
