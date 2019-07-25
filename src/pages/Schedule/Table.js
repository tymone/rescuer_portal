import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/style.css';

const Table = props => {

  const multitude = (multitude, className, day, classNameShift) => {
    return (
      <div className={className}>
        {multitude.map((user, i) => (
          <p key={`Dzień:${day}, Zmiana:${classNameShift}, Ratownik${i + 1}`}>{user ? user : `---`}</p>
        ))}
      </div>
    );
  };

  const shift = (classNameShift, hours, multitude1, multitude2, day, multitude, classNameMultitude1 = 'multitude1', classNameMultitude2 = 'multitude2') => {
    return (
      <div className={classNameShift}>
        <p>{hours}</p>
        {multitude(multitude1, classNameMultitude1, day, classNameShift)}
        {multitude(multitude2, classNameMultitude2, day, classNameShift)}
      </div>
    )
  }

  const day = (day, dayPL, multitude1Shift1, multitude2Shift1, multitude1Shift2, multitude2Shift2, multitude1Shift3, multitude2Shift3, multitude, shift1 = 'shift1', shift2 = 'shift2', shift3 = 'shift3', hours1 = '6:30', hours2 = '14:00', hours3 = '21:30', ) => {
    return (
      <div className={`day ${day}`}>
        {dayPL}
        {shift(shift1, hours1, multitude1Shift1, multitude2Shift1, day, multitude)}
        {shift(shift2, hours2, multitude1Shift2, multitude2Shift2, day, multitude)}
        {shift(shift3, hours3, multitude1Shift3, multitude2Shift3, day, multitude)}
      </div>
    )
  }

  const week = props.schedule.map((week, i) => (
    <div key={i} className='schedule'>
      <h1>
        {' '}
        Harmonogram na okres: {week.dateFrom} - {week.dateTo} <Link to='/harmonogram/edytuj'><i className="fas fa-bars" onClick={props.edit}></i></Link>
      </h1>
      {console.log(week.dateFrom)}
      <div className='table'>
        {day(
          'Monday', 'Poniedziałek',
          week.Monday.shift1.multitude1, week.Monday.shift1.multitude2,
          week.Monday.shift2.multitude1, week.Monday.shift2.multitude2,
          week.Monday.shift3.multitude1, week.Monday.shift3.multitude2,
          multitude)}
        {day(
          'Tuesday', 'Wtorek',
          week.Tuesday.shift1.multitude1, week.Tuesday.shift1.multitude2,
          week.Tuesday.shift2.multitude1, week.Tuesday.shift2.multitude2,
          week.Tuesday.shift3.multitude1, week.Tuesday.shift3.multitude2,
          multitude)}
        {day(
          'Wednesday', 'Środa',
          week.Wednesday.shift1.multitude1, week.Wednesday.shift1.multitude2,
          week.Wednesday.shift2.multitude1, week.Wednesday.shift2.multitude2,
          week.Wednesday.shift3.multitude1, week.Wednesday.shift3.multitude2,
          multitude)}
        {day(
          'Thursday', 'Czwartek',
          week.Thursday.shift1.multitude1, week.Thursday.shift1.multitude2,
          week.Thursday.shift2.multitude1, week.Thursday.shift2.multitude2,
          week.Thursday.shift3.multitude1, week.Thursday.shift3.multitude2,
          multitude)}
        {day(
          'Friday', 'Piątek',
          week.Friday.shift1.multitude1, week.Friday.shift1.multitude2,
          week.Friday.shift2.multitude1, week.Friday.shift2.multitude2,
          week.Friday.shift3.multitude1, week.Friday.shift3.multitude2,
          multitude)}
        {day(
          'Saturday', 'Sobota',
          week.Saturday.shift1.multitude1, week.Saturday.shift1.multitude2,
          week.Saturday.shift2.multitude1, week.Saturday.shift2.multitude2,
          week.Saturday.shift3.multitude1, week.Saturday.shift3.multitude2,
          multitude)}
        {day(
          'Sunday', 'Niedziela',
          week.Sunday.shift1.multitude1, week.Sunday.shift1.multitude2,
          week.Sunday.shift2.multitude1, week.Sunday.shift2.multitude2,
          week.Sunday.shift3.multitude1, week.Sunday.shift3.multitude2,
          multitude)}
      </div>
    </div>
  ));

  return <>{week}</>
};

export default Table;
