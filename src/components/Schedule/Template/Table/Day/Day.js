import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledDayName, StyledDayList, StyledDayListItem, StyledButton } from './StyledDay';

import Shift from '../Shift';

class Day extends Component {
  state = {
    shifts: {},
  };

  componentDidUpdate(prevProps, prevState) {
    const { day } = this.props;
    if (this.props !== prevProps) {
      this.setState({
        shifts: day,
      });
    }
    if (this.state !== prevState) {
      this.sendDayToWeek();
    }
  }

  getShift = () => {
    const { shifts } = this.state;
    const { type } = this.props;
    if (Object.keys(shifts).length !== 0) {
      return Object.keys(shifts).map((multitude) => (
        <StyledDayListItem key={multitude}>
          <Shift
            type={type}
            time={shifts[multitude].time}
            multitude={shifts[multitude].multitude}
            multitudeNumber={multitude}
            overMultitude={shifts[multitude].overMultitude}
            getShift={this.saveShift}
          />
        </StyledDayListItem>
      ));
    }
  };

  saveShift = (shift) => {
    this.setState((prevState) => ({
      shifts: {
        ...prevState.shifts,
        [shift.multitudeNumber]: {
          time: shift.time,
          multitude: shift.multitude,
          overMultitude: shift.overMultitude,
        },
      },
    }));
  };

  sendDayToWeek = () => {
    const { shifts } = this.state;
    const { saveDay, dayName } = this.props;
    const day = {
      day: dayName,
      shifts,
    };
    saveDay(day);
  };

  getDayPL = (dayName = '---') => {
    switch (dayName) {
      case 'Monday':
        return 'Poniedziałek';
      case 'Tuesday':
        return 'Wtorek';
      case 'Wednesday':
        return 'Środa';
      case 'Thursday':
        return 'Czwartek';
      case 'Friday':
        return 'Piątek';
      case 'Saturday':
        return 'Sobota';
      case 'Sunday':
        return 'Niedziela';
      default:
        return dayName;
    }
  };

  addShift = () => {
    const { shifts } = this.state;
    let multitudeNumber = Object.keys(shifts).length;

    this.setState((prevState) => ({
      shifts: {
        ...prevState.shifts,
        [`multitude${multitudeNumber}`]: {
          time: '',
          multitude: ['---', '---', '---', '---', '---'],
          overMultitude: [],
        },
      },
    }));
    multitudeNumber += 1;
  };

  render() {
    const { dayName, type } = this.props;
    return (
      <>
        <StyledDayName>{this.getDayPL(dayName)}</StyledDayName>
        <StyledDayList>{this.getShift()}</StyledDayList>
        {type !== 'read' ? <StyledButton onClick={this.addShift}>Dodaj zastęp</StyledButton> : null}
      </>
    );
  }
}

Day.propTypes = {
  day: PropTypes.object,
  dayName: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Day.defaultProps = {
  day: {},
  dayName: '---',
};

export default Day;
