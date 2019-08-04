import React from 'react';

const CreateSchedule = ({ handleChange, handleSubmit, dateFrom, dateTo }) => {


  let multitude = (classNameMultitude, day, shift) => {
    return (
      <div className={classNameMultitude}>
        <input type='text' placeholder='nazwisko'
          name={`${day}${shift}${classNameMultitude}${`User1`}`} onChange={handleChange} />
        <input type='text' placeholder='nazwisko'
          name={`${day}${shift}${classNameMultitude}${`User2`}`} onChange={handleChange} />
        <input type='text' placeholder='nazwisko'
          name={`${day}${shift}${classNameMultitude}${`User3`}`} onChange={handleChange} />
        <input type='text' placeholder='nazwisko'
          name={`${day}${shift}${classNameMultitude}${`User4`}`} onChange={handleChange} />
        <input type='text' placeholder='nazwisko'
          name={`${day}${shift}${classNameMultitude}${`User5`}`} onChange={handleChange} />
      </div>
    )
  }

  let shift = (classNameShift, hours, dayClassName) => {
    return (
      <div className={classNameShift}>
        <p>{hours}</p>
        {multitude('Multitude1', dayClassName, classNameShift)}
        {multitude('Multitude2', dayClassName, classNameShift)}
      </div>
    )
  }

  let day = (dayClassName, dayPL, shift1 = 'Shift1', shift2 = 'Shift2', shift3 = 'Shift3', hours1 = '6:30', hours2 = '14:30', hours3 = '21:30') => {
    return (
      <div className={`day ${dayClassName}`}>
        {dayPL}
        {shift(shift1, hours1, dayClassName)}
        {shift(shift2, hours2, dayClassName)}
        {shift(shift3, hours3, dayClassName)}
      </div>
    )
  }

  return (
    <>
      <h1>
        Harmonogram od:
          <input value={dateFrom} name="dateFrom" onChange={handleChange} type="date" />
        do:
          <input value={dateTo} name='dateTo' onChange={handleChange} type="date" />
      </h1>
      <div className='table'>
        {day('Monday', 'Poniedziałek')}
        {day('Tuesday', 'Wtorek')}
        {day('Wednesday', 'Środa')}
        {day('Thursday', 'Czwartek')}
        {day('Friday', 'Piątek')}
        {day('Saturday', 'Sobota')}
        {day('Sunday', 'Niedziela')}
      </div>
      <button onClick={handleSubmit}>Zapisz</button>
    </>
  );

}

export default CreateSchedule;
