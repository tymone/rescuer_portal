import React, { Component } from 'react';
import PropTypes from 'prop-types';
import date from 'helpers/setDate';
import { StyledTitle, StyledInput } from './StyledHead';

class Head extends Component {
  state = {
    from: '',
    to: '',
  };

  componentDidMount() {
    const {
      date: { from, to },
    } = this.props;
    this.setState({
      from,
      to,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { from, to } = this.state;
    const { type, getDate } = this.props;
    if (type !== 'read') {
      if (this.state !== prevState) {
        getDate(from, to);
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { from, to } = this.state;
    const { type } = this.props;
    return (
      <StyledTitle>
        Harmonogram od
        {type === 'read' ? (
          ` ${date(from)} `
        ) : (
          <StyledInput
            type="text"
            onFocus={(e) => (e.target.type = 'date')}
            name="from"
            value={from}
            onChange={this.handleChange}
          />
        )}
        do
        {type === 'read' ? (
          ` ${date(to)}`
        ) : (
          <StyledInput
            type="text"
            onFocus={(e) => (e.target.type = 'date')}
            name="to"
            value={to}
            onChange={this.handleChange}
          />
        )}
      </StyledTitle>
    );
  }
}

Head.propTypes = {
  type: PropTypes.string.isRequired,
  date: PropTypes.object,
  getDate: PropTypes.func,
};

export default Head;
