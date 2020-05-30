import React, { Component } from 'react';
import PropTypes from 'prop-types';
import date from 'helpers/setDate';
import { StyledTitle, StyledInput } from './StyledHead';

class Head extends Component {
  state = {
    dateFrom: '',
    dateTo: '',
  };

  componentDidMount() {
    const { date } = this.props;
    this.setState({
      dateFrom: date.from,
      dateTo: date.to,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { dateFrom, dateTo } = this.state;
    const { type, getDate } = this.props;
    if (type === 'create') {
      if (this.state !== prevState) {
        getDate(dateFrom, dateTo);
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { dateFrom, dateTo } = this.state;
    const { type } = this.props;
    return (
      <StyledTitle>
        Harmonogram od
        {type === 'read' ? (
          ` ${date(dateFrom)} `
        ) : (
          <StyledInput type="date" name="dateFrom" value={dateFrom} onChange={this.handleChange} />
        )}
        do
        {type === 'read' ? (
          ` ${date(dateTo)}`
        ) : (
          <StyledInput type="date" name="dateTo" value={dateTo} onChange={this.handleChange} />
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
