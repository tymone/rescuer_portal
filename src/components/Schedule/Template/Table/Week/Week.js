import React from 'react';
import PropTypes from 'prop-types';

import { StyledWeek, StyledTable, StyledListItem } from './StyledWeek';

import Head from '../../Head';
import Day from '../Day';
import OutOfWeek from '../../OutOfWeek';

const Week = ({
  schedule: { week, outOfWeek, date },
  type,
  getDateToSchedule,
  getDayToSchedule,
  getOutOfWeekToSchedule,
}) => {
  const getDate = (from, to) => {
    const date = { from, to };
    getDateToSchedule(date);
  };

  const getDay = (dayName, shifts) => {
    getDayToSchedule(dayName, shifts);
  };

  const getOutOfWeek = (outOfWeek) => {
    getOutOfWeekToSchedule(outOfWeek);
  };

  const showDay = () => {
    if (Object.keys(week).length !== 0) {
      return Object.keys(week).map((day) => (
        <StyledListItem key={day}>
          <Day dayName={day} type={type} day={week[day]} getDay={getDay} />
        </StyledListItem>
      ));
    }
    return <p>Brak harmonogramu na dany tydzień</p>;
  };

  return (
    <StyledWeek>
      <Head type={type} date={date} getDate={getDate} />
      <StyledTable>{showDay()}</StyledTable>
      <OutOfWeek type={type} schedule={outOfWeek} getOutOfWeek={getOutOfWeek} />
    </StyledWeek>
  );
};

Week.propTypes = {
  schedule: PropTypes.object,
  type: PropTypes.string.isRequired,
  getDateToSchedule: PropTypes.func,
  getDayToSchedule: PropTypes.func,
  getOutOfWeekToSchedule: PropTypes.func,
};
Week.defaultProps = {
  schedule: {},
};

export default Week;
