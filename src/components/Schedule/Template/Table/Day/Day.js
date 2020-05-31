import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledDayName, StyledDayList, StyledDayListItem, StyledButton } from './StyledDay';

import Shift from '../Shift';

class Day extends Component {
  state = {
    shifts: {},
  };

  componentDidMount() {
    const { day } = this.props;
    this.setState({
      shifts: day,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { shifts } = this.state;
    const { type, getDay, dayName } = this.props;
    if (type !== 'read') {
      if (this.state !== prevState) {
        getDay(dayName, shifts);
      }
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
    return type === 'read' ? <p>Brak zastępów w danym dniu lub wystąpił jakiś błąd.</p> : null;
  };

  saveShift = (shift) => {
    const { multitudeNumber, time, multitude, overMultitude } = shift;
    this.setState((prevState) => ({
      shifts: {
        ...prevState.shifts,
        [multitudeNumber]: {
          time,
          multitude,
          overMultitude,
        },
      },
    }));
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

  getDayPL = (dayName) => {
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
  getDay: PropTypes.func,
};

Day.defaultProps = {
  day: {},
  dayName: '---',
};

export default Day;
