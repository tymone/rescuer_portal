import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledWeek, StyledTable, StyledListItem } from './StyledWeek';

import Head from '../../Head';
import Day from '../Day';
import OutOfWeek from '../../OutOfWeek';

class Week extends Component {
  state = {
    dateFrom: '',
    dateTo: '',
    Monday: {},
    Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {},
    Saturday: {},
    Sunday: {},
    outOfWeek: {},
  };

  componentDidMount() {
    const { type } = this.props;
    if (type !== 'create') {
      const {
        schedule: { date, week, outOfWeek },
      } = this.props;
      this.setState({
        dateFrom: date.from,
        dateTo: date.to,
        Monday: week.Monday,
        Tuesday: week.Tuesday,
        Wednesday: week.Wednesday,
        Thursday: week.Thursday,
        Friday: week.Friday,
        Saturday: week.Saturday,
        Sunday: week.Sunday,
        outOfWeek,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveDay = (daySchedule) => {
    // console.log(daySchedule.shifts);
    const { day, shifts } = daySchedule;
    // this.setState((prevState) => ({
    //   ...prevState,
    //   [day]: { multitude1: { time: '', multitude: [], overMultitude: [] } },
    // }));
  };

  getDay = () => {
    const { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = this.state;
    const { type } = this.props;
    const week = { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday };
    const getWeek = Object.keys(week);
    return getWeek.map((day) => (
      <StyledListItem key={day}>
        <Day dayName={day} type={type} day={this.state[day]} saveDay={this.saveDay} />
      </StyledListItem>
    ));
  };

  render() {
    const { type } = this.props;
    const { dateFrom, dateTo, outOfWeek } = this.state;
    return (
      <StyledWeek>
        <Head type={type} from={dateFrom} to={dateTo} handleChange={this.handleChange} />
        <StyledTable>{this.getDay()}</StyledTable>
        <OutOfWeek type={type} schedule={outOfWeek} />
      </StyledWeek>
    );
  }
}

Week.propTypes = {
  schedule: PropTypes.object,
  type: PropTypes.string.isRequired,
};
Week.defaultProps = {
  schedule: {},
};

export default Week;
