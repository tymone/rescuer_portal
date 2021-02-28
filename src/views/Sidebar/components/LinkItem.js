import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import Sublinks from './Sublinks';

class LinkItem extends Component {
  state = {
    showSublinks: false,
  };

  showSublinks = () => {
    this.setState((prevState) => ({ showSublinks: !prevState.showSublinks }));
  };

  render() {
    const {
      link: { href, exact, icon, title, sublinks },
    } = this.props;
    const { showSublinks } = this.state;
    return (
      <>
        <NavLink to={href} exact={exact || false}>
          <i className={icon} />
          {title}
        </NavLink>
        {sublinks ? <i className="fas fa-chevron-down" onClick={this.showSublinks} /> : null}
        {showSublinks ? <Sublinks parentHref={href} sublinks={sublinks} /> : null}
      </>
    );
  }
}

LinkItem.propTypes = {
  link: PropTypes.object,
  href: PropTypes.string,
  exact: PropTypes.bool,
  icon: PropTypes.string,
  title: PropTypes.string,
  sublinks: PropTypes.string,
};

export default LinkItem;
