import React, { Component } from 'react';

import { StyledWeek } from './StyledWeek';
import Day from './Day';

class Calendar extends Component {
  state = {
    today: null,
  };

  componentDidMount() {
    const today = new Date();
    this.setState({ today });
  }

  render() {
    const { today } = this.state;
    const getDay = new Date(today).getDay();

    return (
      <StyledWeek catchDay={getDay === 0 ? 7 : getDay}>
        <Day name="Poniedziałek" />
        <Day name="Wtorek" />
        <Day name="Środa" />
        <Day name="Czwartek" />
        <Day name="Piątek" />
        <Day name="Sobota" />
        <Day name="Niedziela" />
      </StyledWeek>
    );
  }
}

export default Calendar;
