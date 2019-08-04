import React from 'react';

const Week = ({ week, editState, edit }) => {

  const multitude = (multitude, className, day, classNameShift, handleChange) => {

    // Priorytet =======================

    return editState ?
      <div className={className}>
        {multitude.map((user, i) => <input type='text' placeholder={user}
          name={`${day}${classNameShift}${className}${`User${i + 1}`}`} onChange={handleChange} />)}
      </div>
      :
      (
        <div className={className} >
          {
            multitude.map((user, i) => (
              <p key={`Dzień:${day}, Zmiana:${classNameShift}, Ratownik${i + 1}`}>
                {user ? user : `---`}
              </p>
            ))
          }
        </div >
      );

    // ==============================================
  };

  const shift = (classNameShift, hours, multitude1, multitude2, day, multitude, classNameMultitude1 = 'Multitude1', classNameMultitude2 = 'Multitude2') => {
    return (
      <div className={classNameShift}>
        <p>{hours}</p>
        {multitude(multitude1, classNameMultitude1, day, classNameShift)}
        {multitude(multitude2, classNameMultitude2, day, classNameShift)}
      </div>
    )
  }

  const day = (day, dayPL, multitude1Shift1, multitude2Shift1, multitude1Shift2, multitude2Shift2, multitude1Shift3, multitude2Shift3, multitude, shift1 = 'Shift1', shift2 = 'Shift2', shift3 = 'Shift3', hours1 = '6:30', hours2 = '14:00', hours3 = '21:30', ) => {
    return (
      <div className={`day ${day}`}>
        {dayPL}
        {shift(shift1, hours1, multitude1Shift1, multitude2Shift1, day, multitude)}
        {shift(shift2, hours2, multitude1Shift2, multitude2Shift2, day, multitude)}
        {shift(shift3, hours3, multitude1Shift3, multitude2Shift3, day, multitude)}
      </div>
    )
  }

  return (
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
  )
}
export default Week